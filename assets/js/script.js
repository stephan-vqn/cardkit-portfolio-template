/**
 * Fichier : assets/js/script.js
 * Rôle : gestion des interactions du template portfolio
 *
 * Sommaire :
 * 1. Sélecteurs DOM
 * 2. Helpers thème
 * 3. Projets
 * 4. Onglets
 * 5. Thème
 * 6. Carte OpenStreetMap
 * 7. Fallbacks médias
 * 8. Initialisation
 */

/* 1. Sélecteurs DOM */
const tabsRoot = document.querySelector('[data-tabs]');

const elements = {
	tabs: tabsRoot ? tabsRoot.querySelectorAll('.tab-trigger') : [],
	panels: tabsRoot ? tabsRoot.querySelectorAll('.tab-panel') : [],
	tabIndicator: tabsRoot ? tabsRoot.querySelector('.tab-indicator') : null,
	tabsList: tabsRoot ? tabsRoot.querySelector('.tabs-list') : null,
	contentPanel: document.querySelector('.content-panel'),
	themeToggle: document.getElementById('themeToggle'),
	themeColorMeta: document.getElementById('themeColorMeta'),
	projectsListView: tabsRoot ? tabsRoot.querySelector('#projectsListView') : null,
	projectDetailView: tabsRoot ? tabsRoot.querySelector('#projectDetailView') : null,
	projectTriggers: tabsRoot ? tabsRoot.querySelectorAll('[data-project-trigger]') : [],
	projectDetails: tabsRoot ? tabsRoot.querySelectorAll('[data-project-detail]') : [],
	projectCloseButtons: tabsRoot ? tabsRoot.querySelectorAll('[data-close-projects]') : [],
	openTabButtons: document.querySelectorAll('[data-open-tab]'),
	mapElement: tabsRoot ? tabsRoot.querySelector('#map') : null,
	mapFallback: tabsRoot ? tabsRoot.querySelector('#mapFallback') : null,
	avatarImage: document.querySelector('.avatar-image'),
	avatarPlaceholder: document.querySelector('.avatar-placeholder'),
	projectImages: document.querySelectorAll('.project-media-image')
};

const themeModes = ['dark', 'light'];

let mapInitialized = false;
let mapInstance = null;
let lastFocusedProjectTrigger = null;

/* 2. Helpers thème */
function getSystemTheme() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme() {
	try {
		const storedTheme = localStorage.getItem('theme');
		return themeModes.includes(storedTheme) ? storedTheme : null;
	} catch (error) {
		return null;
	}
}

function storeTheme(theme) {
	try {
		localStorage.setItem('theme', theme);
	} catch (error) {
		/* localStorage peut être indisponible selon le contexte */
	}
}

function getCurrentTheme() {
	return document.documentElement.getAttribute('data-theme') || 'light';
}

/* 3. Projets */
function openProjectPage(projectId, triggerElement = null) {
	if (!elements.projectDetailView || !elements.projectsListView) {
		return;
	}

	const activeDetail = tabsRoot ? tabsRoot.querySelector(`[data-project-detail="${projectId}"]`) : null;
	if (!activeDetail) {
		return;
	}

	if (triggerElement instanceof HTMLElement) {
		lastFocusedProjectTrigger = triggerElement;
	}

	elements.projectDetails.forEach((detail) => {
		detail.classList.add('hidden');
		detail.hidden = true;
	});

	activeDetail.classList.remove('hidden');
	activeDetail.hidden = false;

	elements.projectsListView.classList.add('hidden');
	elements.projectDetailView.classList.remove('hidden');

	const backButton = activeDetail.querySelector('[data-close-projects]');
	if (backButton instanceof HTMLElement) {
		requestAnimationFrame(() => {
			backButton.focus({ preventScroll: true });
		});
	}

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	elements.contentPanel?.scrollIntoView({
		behavior: prefersReducedMotion ? 'auto' : 'smooth',
		block: 'start'
	});
}

function closeProjectPage(options = {}) {
	const { restoreFocus = true } = options;

	if (!elements.projectDetailView || !elements.projectsListView) {
		return;
	}

	elements.projectDetails.forEach((detail) => {
		detail.classList.add('hidden');
		detail.hidden = true;
	});

	elements.projectDetailView.classList.add('hidden');
	elements.projectsListView.classList.remove('hidden');

	if (restoreFocus && lastFocusedProjectTrigger instanceof HTMLElement) {
		lastFocusedProjectTrigger.focus({ preventScroll: true });
	}
}

function setupProjects() {
	elements.projectTriggers.forEach((trigger) => {
		trigger.addEventListener('click', () => {
			openProjectPage(trigger.dataset.projectTrigger, trigger);
		});
	});

	elements.projectCloseButtons.forEach((button) => {
		button.addEventListener('click', () => closeProjectPage());
	});
}

/* 4. Onglets */
function updateTabIndicator(activeTab) {
	if (!elements.tabIndicator || !elements.tabsList || !activeTab) {
		return;
	}

	const listRect = elements.tabsList.getBoundingClientRect();
	const tabRect = activeTab.getBoundingClientRect();
	const offsetX = tabRect.left - listRect.left - 4;

	elements.tabIndicator.style.width = `${tabRect.width}px`;
	elements.tabIndicator.style.transform = `translateX(${offsetX}px)`;
}

function activateTab(tabName, options = {}) {
	let activePanel = null;
	let activeTab = null;

	elements.tabs.forEach((tab) => {
		const isActive = tab.dataset.tabTarget === tabName;
		tab.classList.toggle('active', isActive);
		tab.setAttribute('aria-selected', String(isActive));
		tab.setAttribute('tabindex', isActive ? '0' : '-1');

		if (isActive) {
			activeTab = tab;
			updateTabIndicator(tab);
		}
	});

	elements.panels.forEach((panel) => {
		const isActive = panel.id === `tab-${tabName}`;
		panel.classList.toggle('active', isActive);
		panel.hidden = !isActive;

		if (isActive) {
			activePanel = panel;
		}
	});

	if (options.focusTab && activeTab instanceof HTMLElement) {
		requestAnimationFrame(() => {
			activeTab.focus({ preventScroll: true });
		});
	}

	if (options.focusPanel && activePanel instanceof HTMLElement) {
		requestAnimationFrame(() => {
			activePanel.focus({ preventScroll: true });
		});
	}

	if (tabName !== 'projects') {
		closeProjectPage({ restoreFocus: false });
	}

	if (tabName === 'contact') {
		initializeMap();
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (mapInstance) {
					mapInstance.invalidateSize();
				}
			});
		});
	}
}

function handleTabKeyNavigation(event) {
	const tabsArray = Array.from(elements.tabs);
	const currentIndex = tabsArray.indexOf(event.currentTarget);

	if (currentIndex === -1) {
		return;
	}

	let nextIndex = currentIndex;

	switch (event.key) {
		case 'ArrowRight':
			nextIndex = (currentIndex + 1) % tabsArray.length;
			break;
		case 'ArrowLeft':
			nextIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
			break;
		case 'Home':
			nextIndex = 0;
			break;
		case 'End':
			nextIndex = tabsArray.length - 1;
			break;
		default:
			return;
	}

	event.preventDefault();
	activateTab(tabsArray[nextIndex].dataset.tabTarget, { focusTab: true });
}

function setupTabs() {
	elements.tabs.forEach((tab) => {
		tab.addEventListener('click', () => activateTab(tab.dataset.tabTarget));
		tab.addEventListener('keydown', handleTabKeyNavigation);
	});

	elements.openTabButtons.forEach((button) => {
		button.addEventListener('click', () => activateTab(button.dataset.openTab, { focusPanel: true }));
	});

	requestAnimationFrame(() => {
		const activeTab = tabsRoot ? tabsRoot.querySelector('.tab-trigger.active') : null;
		if (activeTab) {
			updateTabIndicator(activeTab);
		}
	});

	window.addEventListener('resize', () => {
		const activeTab = tabsRoot ? tabsRoot.querySelector('.tab-trigger.active') : null;
		if (activeTab) {
			updateTabIndicator(activeTab);
		}
	});
}

/* 5. Thème */
function updateThemeMeta(theme = getCurrentTheme()) {
	if (!elements.themeColorMeta) {
		return;
	}

	/* Lit uniquement les variables de palette définies dans style.css. */
	/* Le template utilise un thème binaire clair / sombre. */
	/* La préférence système n'est utilisée qu'en l'absence de préférence enregistrée. */
	/* Pour changer les couleurs de thème, modifier --theme-color-light et --theme-color-dark dans le CSS. */
	const rootStyles = getComputedStyle(document.documentElement);
	const themeColor = rootStyles.getPropertyValue(`--theme-color-${theme}`).trim();
	if (themeColor) {
		elements.themeColorMeta.setAttribute('content', themeColor);
	}
}

function updateThemeButton(theme) {
	if (!elements.themeToggle) {
		return;
	}

	const labels = {
		dark: 'Thème : sombre',
		light: 'Thème : clair'
	};

	const moonIcon = elements.themeToggle.querySelector('.icon-moon');
	const sunIcon = elements.themeToggle.querySelector('.icon-sun');

	moonIcon?.classList.toggle('hidden', theme !== 'dark');
	sunIcon?.classList.toggle('hidden', theme !== 'light');
	elements.themeToggle.setAttribute('aria-label', labels[theme]);
	elements.themeToggle.setAttribute('title', labels[theme]);
}

function applyTheme(theme) {
	document.documentElement.setAttribute('data-theme', theme);
	storeTheme(theme);
	updateThemeButton(theme);
	updateThemeMeta(theme);
}

function getNextTheme(currentTheme) {
	return currentTheme === 'dark' ? 'light' : 'dark';
}

function setupTheme() {
	if (!elements.themeToggle) {
		return;
	}

	const initialTheme = getStoredTheme() || getSystemTheme();
	const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
	const handleSystemThemeChange = () => {
		if (!getStoredTheme()) {
			const systemTheme = getSystemTheme();
			document.documentElement.setAttribute('data-theme', systemTheme);
			updateThemeButton(systemTheme);
			updateThemeMeta(systemTheme);
		}
	};

	document.documentElement.setAttribute('data-theme', initialTheme);
	updateThemeButton(initialTheme);
	updateThemeMeta(initialTheme);

	elements.themeToggle.addEventListener('click', () => {
		const currentTheme = getCurrentTheme();
		applyTheme(getNextTheme(currentTheme));
	});

	if (typeof colorSchemeQuery.addEventListener === 'function') {
		colorSchemeQuery.addEventListener('change', handleSystemThemeChange);
	} else if (typeof colorSchemeQuery.addListener === 'function') {
		colorSchemeQuery.addListener(handleSystemThemeChange);
	}
}

/* 6. Carte OpenStreetMap */
function showMapFallback(message) {
	if (!elements.mapElement) {
		return;
	}

	elements.mapElement.classList.add('is-fallback');

	if (elements.mapFallback) {
		elements.mapFallback.classList.remove('hidden');
		elements.mapFallback.textContent = message;
	}
}

function clearMapFallback() {
	if (!elements.mapElement) {
		return;
	}

	elements.mapElement.classList.remove('is-fallback');
	elements.mapElement.textContent = '';

	if (elements.mapFallback) {
		elements.mapFallback.classList.add('hidden');
		elements.mapFallback.textContent = '';
	}
}

function initializeMap() {
	if (mapInitialized || !elements.mapElement) {
		return;
	}

	if (!window.L) {
		showMapFallback('Carte temporairement indisponible. Vérifiez que Leaflet est bien chargé.');
		return;
	}

	clearMapFallback();

	/* Pour changer la localisation : remplacer les deux nombres ci-dessous par la latitude et la longitude de la ville souhaitée. */
	/* Exemple : [43.6045, 1.4442] pour Toulouse. */
	/* Mettre à jour aussi le texte du marqueur dans bindPopup juste en dessous. */
	const defaultCoordinates = [48.8566, 2.3522];

	mapInstance = window.L.map(elements.mapElement).setView(defaultCoordinates, 12);

	window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mapInstance);

	window.L.marker(defaultCoordinates)
		.addTo(mapInstance)
		.bindPopup('Paris — personnaliser la localisation dans assets/js/script.js');

	mapInitialized = true;
}

/* 7. Fallbacks médias */
function setupProjectMediaFallbacks() {
	elements.projectImages.forEach((image) => {
		const mediaWrapper = image.closest('.project-media-frame, .project-detail-media');
		const fallback = mediaWrapper ? mediaWrapper.querySelector('.project-media-fallback') : null;

		if (!(fallback instanceof HTMLElement)) {
			return;
		}

		const revealFallback = () => {
			image.hidden = true;
			fallback.hidden = false;
		};

		const showImage = () => {
			image.hidden = false;
			fallback.hidden = true;
		};

		if (!image.getAttribute('src')) {
			revealFallback();
			return;
		}

		if (image.complete) {
			if (image.naturalWidth > 0) {
				showImage();
			} else {
				revealFallback();
			}
			return;
		}

		image.addEventListener('load', showImage, { once: true });
		image.addEventListener('error', revealFallback, { once: true });
	});
}

function setupAvatarFallback() {
	if (!elements.avatarImage || !elements.avatarPlaceholder) {
		return;
	}

	const revealPlaceholder = () => {
		elements.avatarImage.hidden = true;
		elements.avatarPlaceholder.hidden = false;
	};

	const showImage = () => {
		elements.avatarImage.hidden = false;
		elements.avatarPlaceholder.hidden = true;
	};

	if (!elements.avatarImage.getAttribute('src')) {
		revealPlaceholder();
		return;
	}

	if (elements.avatarImage.complete) {
		if (elements.avatarImage.naturalWidth > 0) {
			showImage();
		} else {
			revealPlaceholder();
		}
		return;
	}

	elements.avatarImage.addEventListener('load', showImage, { once: true });
	elements.avatarImage.addEventListener('error', revealPlaceholder, { once: true });
}

/* 8. Initialisation */
function initIcons() {
	if (window.lucide) {
		window.lucide.createIcons({ attrs: { 'stroke-width': 2 } });
	}
}

function init() {
	setupProjects();
	setupTabs();
	initIcons();
	setupTheme();
	setupProjectMediaFallbacks();
	setupAvatarFallback();
}

document.addEventListener('DOMContentLoaded', init);
