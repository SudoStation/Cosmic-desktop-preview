/**
 * COSMIC Desktop Preview — interactive shell
 * Panel/Dock layout from cosmic-panel default_schema
 * Launcher: cosmic-launcher · App Library: cosmic-app-library
 * File manager: COSMIC Files (com.system76.CosmicFiles)
 * Theme: cosmic-dark palette (libcosmic dark.ron)
 * Default wallpaper: orion_nebula_nasa_heic0601a.jpg
 */

/* ---------- Apps (desktop entries style) ---------- */

const GROUPS = [
  { id: "home", name: "Library Home", icon: "assets/places/user-home-symbolic.svg" },
  { id: "office", name: "Office", icon: "assets/menu/applications-office-symbolic.svg" },
  { id: "system", name: "System", icon: "assets/menu/applications-system-symbolic.svg" },
  { id: "utilities", name: "Utilities", icon: "assets/menu/applications-utilities-symbolic.svg" },
];

const APPS = [
  {
    id: "files",
    name: "Files",
    desc: "File manager for the COSMIC desktop",
    icon: "assets/apps/com.system76.CosmicFiles.svg",
    groups: ["home", "utilities"],
    dock: true,
  },
  {
    id: "firefox",
    name: "Firefox",
    desc: "Browse the World Wide Web",
    icon: "assets/apps/firefox.svg",
    groups: ["home"],
    dock: true,
  },
  {
    id: "terminal",
    name: "Terminal",
    desc: "COSMIC Terminal",
    icon: "assets/apps/com.system76.CosmicTerm.svg",
    groups: ["home", "utilities"],
    dock: true,
  },
  {
    id: "settings",
    name: "Settings",
    desc: "COSMIC Settings",
    icon: "assets/apps/preferences-desktop.svg",
    groups: ["home", "system"],
    dock: true,
  },
  {
    id: "store",
    name: "COSMIC Store",
    desc: "Install and manage applications",
    icon: "assets/apps/com.system76.CosmicStore.svg",
    groups: ["home", "system"],
    dock: true,
  },
  {
    id: "edit",
    name: "Text Editor",
    desc: "COSMIC Edit",
    icon: "assets/apps/com.system76.CosmicEdit.svg",
    groups: ["home", "utilities"],
    dock: true,
  },
  {
    id: "player",
    name: "Media Player",
    desc: "COSMIC Player",
    icon: "assets/apps/com.system76.CosmicPlayer.svg",
    groups: ["home"],
  },
  {
    id: "calculator",
    name: "Calculator",
    desc: "Perform calculations",
    icon: "assets/apps/accessories-calculator.svg",
    groups: ["home", "utilities"],
  },
  {
    id: "calendar",
    name: "Calendar",
    desc: "Calendar application",
    icon: "assets/apps/office-calendar.svg",
    groups: ["home", "office"],
  },
  {
    id: "libreoffice",
    name: "LibreOffice",
    desc: "The office productivity suite",
    icon: "assets/apps/org.libreoffice.LibreOffice.startcenter.png",
    groups: ["home", "office"],
  },
  {
    id: "writer",
    name: "LibreOffice Writer",
    desc: "Create and edit text documents",
    icon: "assets/apps/org.libreoffice.LibreOffice.writer.png",
    groups: ["office"],
  },
  {
    id: "calc",
    name: "LibreOffice Calc",
    desc: "Perform calculations, analyze information",
    icon: "assets/apps/org.libreoffice.LibreOffice.calc.png",
    groups: ["office"],
  },
  {
    id: "impress",
    name: "LibreOffice Impress",
    desc: "Create and edit presentations",
    icon: "assets/apps/org.libreoffice.LibreOffice.impress.png",
    groups: ["office"],
  },
  {
    id: "contacts",
    name: "Contacts",
    desc: "Manage your contacts",
    icon: "assets/apps/org.gnome.Contacts.png",
    groups: ["office"],
  },
  {
    id: "video",
    name: "Videos",
    desc: "Play movies",
    icon: "assets/apps/multimedia-video-player.svg",
    groups: ["home"],
  },
  {
    id: "music",
    name: "Music",
    desc: "Play and organize music",
    icon: "assets/apps/multimedia-audio-player.svg",
    groups: ["home"],
  },
];

/* ---------- Filesystem mock (COSMIC Files places) ---------- */

const FS = {
  home: {
    label: "Home",
    icon: "assets/places/user-home.svg",
    items: [
      { name: "Desktop", icon: "assets/places/user-desktop.svg", type: "folder", place: "desktop", size: "—", modified: "Today" },
      { name: "Documents", icon: "assets/places/folder-documents.svg", type: "folder", place: "documents", size: "—", modified: "Yesterday" },
      { name: "Downloads", icon: "assets/places/folder-download.svg", type: "folder", place: "downloads", size: "—", modified: "Today" },
      { name: "Music", icon: "assets/places/folder-music.svg", type: "folder", place: "music", size: "—", modified: "12 Jul 2026" },
      { name: "Pictures", icon: "assets/places/folder-pictures.svg", type: "folder", place: "pictures", size: "—", modified: "10 Jul 2026" },
      { name: "Public", icon: "assets/places/folder-publicshare.svg", type: "folder", place: "public", size: "—", modified: "1 Jul 2026" },
      { name: "Templates", icon: "assets/places/folder-templates.svg", type: "folder", place: "templates", size: "—", modified: "1 Jul 2026" },
      { name: "Videos", icon: "assets/places/folder-videos.svg", type: "folder", place: "videos", size: "—", modified: "5 Jul 2026" },
    ],
  },
  desktop: {
    label: "Desktop",
    icon: "assets/places/user-desktop.svg",
    items: [],
  },
  documents: {
    label: "Documents",
    icon: "assets/places/folder-documents.svg",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.svg", type: "file", size: "2.1 kB", modified: "Today" },
      { name: "budget.ods", icon: "assets/apps/org.libreoffice.LibreOffice.calc.png", type: "file", size: "48 kB", modified: "Yesterday" },
      { name: "report.odt", icon: "assets/apps/org.libreoffice.LibreOffice.writer.png", type: "file", size: "112 kB", modified: "8 Jul 2026" },
    ],
  },
  downloads: {
    label: "Downloads",
    icon: "assets/places/folder-download.svg",
    items: [
      { name: "pop-os_24.04_amd64.iso", icon: "assets/places/folder.svg", type: "file", size: "2.8 GB", modified: "Today" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.svg", type: "file", size: "340 kB", modified: "Yesterday" },
    ],
  },
  music: {
    label: "Music",
    icon: "assets/places/folder-music.svg",
    items: [{ name: "Playlist", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "1 Jun 2026" }],
  },
  pictures: {
    label: "Pictures",
    icon: "assets/places/folder-pictures.svg",
    items: [
      { name: "Vacation", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "20 Jun 2026" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB", modified: "10 Jul 2026" },
    ],
  },
  videos: {
    label: "Videos",
    icon: "assets/places/folder-videos.svg",
    items: [],
  },
  public: {
    label: "Public",
    icon: "assets/places/folder-publicshare.svg",
    items: [],
  },
  templates: {
    label: "Templates",
    icon: "assets/places/folder-templates.svg",
    items: [],
  },
  recents: {
    label: "Recents",
    icon: "assets/places/folder-recent.svg",
    items: [
      { name: "report.odt", icon: "assets/apps/org.libreoffice.LibreOffice.writer.png", type: "file", size: "112 kB", modified: "8 Jul 2026" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB", modified: "10 Jul 2026" },
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.svg", type: "file", size: "2.1 kB", modified: "Today" },
    ],
  },
  trash: {
    label: "Trash",
    icon: "assets/places/user-trash.svg",
    items: [],
  },
  networks: {
    label: "Networks",
    icon: "assets/places/network-workgroup.svg",
    items: [],
  },
};

/** Default sidebar order from cosmic-files Config::default */
const SIDEBAR = [
  { id: "recents", label: "Recents", icon: "assets/places/folder-recent.svg" },
  { id: "home", label: "Home", icon: "assets/places/user-home.svg" },
  { id: "documents", label: "Documents", icon: "assets/places/folder-documents.svg" },
  { id: "downloads", label: "Downloads", icon: "assets/places/folder-download.svg" },
  { id: "music", label: "Music", icon: "assets/places/folder-music.svg" },
  { id: "pictures", label: "Pictures", icon: "assets/places/folder-pictures.svg" },
  { id: "videos", label: "Videos", icon: "assets/places/folder-videos.svg" },
  { sep: true },
  { id: "trash", label: "Trash", icon: "assets/places/user-trash.svg" },
  { sep: true },
  { id: "networks", label: "Networks", icon: "assets/places/network-workgroup.svg" },
];

/* ---------- DOM ---------- */

const clockText = document.getElementById("clock-text");
const clockBtn = document.getElementById("clock-btn");
const calendarPopover = document.getElementById("calendar-popover");
const calTime = document.getElementById("cal-time");
const calFullDate = document.getElementById("cal-full-date");
const calMonthLabel = document.getElementById("cal-month-label");
const calGrid = document.getElementById("cal-grid");
const calPrev = document.getElementById("cal-prev");
const calNext = document.getElementById("cal-next");

const soundBtn = document.getElementById("sound-btn");
const soundPopover = document.getElementById("sound-popover");
const volumeSlider = document.getElementById("volume-slider");
const volumePct = document.getElementById("volume-pct");
const netBtn = document.getElementById("net-btn");
const netPopover = document.getElementById("net-popover");
const battBtn = document.getElementById("batt-btn");
const battPopover = document.getElementById("batt-popover");
const notifBtn = document.getElementById("notif-btn");
const notifPopover = document.getElementById("notif-popover");
const powerBtn = document.getElementById("power-btn");
const powerPopover = document.getElementById("power-popover");

const launcher = document.getElementById("launcher");
const launcherSearch = document.getElementById("launcher-search");
const launcherResults = document.getElementById("launcher-results");
const launcherEmpty = document.getElementById("launcher-empty");
const dockLauncherBtn = document.getElementById("dock-launcher-btn");

const appLibrary = document.getElementById("app-library");
const librarySearch = document.getElementById("library-search");
const appLibraryGrid = document.getElementById("app-library-grid");
const appLibraryEmpty = document.getElementById("app-library-empty");
const appLibraryGroups = document.getElementById("app-library-groups");
const panelAppLibraryBtn = document.getElementById("panel-applibrary-btn");
const dockAppLibraryBtn = document.getElementById("dock-applibrary-btn");

const dockApps = document.getElementById("dock-apps");
const desktop = document.getElementById("desktop");

const workspacesOverview = document.getElementById("workspaces-overview");
const wsSidebar = document.getElementById("ws-sidebar");
const wsToplevels = document.getElementById("ws-toplevels");
const panelWorkspacesBtn = document.getElementById("panel-workspaces-btn");
const dockWorkspacesBtn = document.getElementById("dock-workspaces-btn");

const filesWindow = document.getElementById("files-window");
const filesClose = document.getElementById("files-close");
const filesHeaderTitle = document.getElementById("files-header-title");
const filesPathLabel = document.getElementById("files-path-label");
const filesContent = document.getElementById("files-content");
const filesSidebar = document.getElementById("files-sidebar");
const filesSidebarToggle = document.getElementById("files-sidebar-toggle");
const filesSearchToggle = document.getElementById("files-search-toggle");
const filesSearchBar = document.getElementById("files-search-bar");
const filesSearchInput = document.getElementById("files-search-input");
const filesViewGrid = document.getElementById("files-view-grid");
const filesViewList = document.getElementById("files-view-list");
const filesBack = document.getElementById("files-back");
const filesForward = document.getElementById("files-forward");
const filesMenuBtn = document.getElementById("files-menu-btn");
const filesMenuPopup = document.getElementById("files-menu-popup");

/* ---------- State ---------- */

let viewYear;
let viewMonth;
let currentGroup = "home";
let currentPlace = "home";
let filesHistory = ["home"];
let filesHistIndex = 0;
let filesView = "list";
let launcherFocus = 0;
/** Active workspace index (0-based). Cosmic default layout is Vertical. */
let activeWorkspace = 0;

/**
 * Mock workspace model for the overview.
 * windows[].kind drives the mini preview body style.
 */
let workspaces = [
  {
    id: 1,
    name: "1",
    windows: [
      {
        id: "win-files",
        title: "Home",
        app: "files",
        icon: "assets/apps/com.system76.CosmicFiles.svg",
        kind: "files",
      },
      {
        id: "win-firefox",
        title: "Firefox",
        app: "firefox",
        icon: "assets/apps/firefox.svg",
        kind: "browser",
      },
    ],
  },
  {
    id: 2,
    name: "2",
    windows: [
      {
        id: "win-term",
        title: "leon@pop-os:~",
        app: "terminal",
        icon: "assets/apps/com.system76.CosmicTerm.svg",
        kind: "terminal",
      },
    ],
  },
];

const POPOVERS = [
  calendarPopover,
  soundPopover,
  netPopover,
  battPopover,
  notifPopover,
  powerPopover,
];

/* ---------- Clock ---------- */

function formatPanelClock(date) {
  const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
  const time = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
  return `${weekday} ${time}`;
}

function tickClock() {
  const now = new Date();
  clockText.textContent = formatPanelClock(now);
  if (!calendarPopover.hidden) {
    calTime.textContent = now.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
}

tickClock();
setInterval(tickClock, 15_000);

/* ---------- Calendar ---------- */

function setViewToToday() {
  const now = new Date();
  viewYear = now.getFullYear();
  viewMonth = now.getMonth();
}

function buildCalendar() {
  const now = new Date();
  const todayY = now.getFullYear();
  const todayM = now.getMonth();
  const todayD = now.getDate();

  calFullDate.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  calMonthLabel.textContent = new Date(viewYear, viewMonth, 1).toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
  calTime.textContent = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Week starts Monday (common Cosmic/European preference)
  const first = new Date(viewYear, viewMonth, 1);
  let startOffset = first.getDay() - 1;
  if (startOffset < 0) startOffset = 6;

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

  calGrid.innerHTML = "";
  for (let i = 0; i < 42; i++) {
    const cell = document.createElement("span");
    cell.className = "cal-day";
    let dayNum;
    let muted = false;
    if (i < startOffset) {
      dayNum = daysInPrev - startOffset + i + 1;
      muted = true;
    } else if (i >= startOffset + daysInMonth) {
      dayNum = i - startOffset - daysInMonth + 1;
      muted = true;
    } else {
      dayNum = i - startOffset + 1;
      if (viewYear === todayY && viewMonth === todayM && dayNum === todayD) {
        cell.classList.add("today");
      }
    }
    if (muted) cell.classList.add("muted");
    cell.textContent = String(dayNum);
    calGrid.appendChild(cell);
  }
}

setViewToToday();
buildCalendar();

calPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
  }
  buildCalendar();
});

calNext.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
  }
  buildCalendar();
});

/* ---------- Popover helpers ---------- */

function closeAllPopovers(except) {
  for (const p of POPOVERS) {
    if (p !== except) p.hidden = true;
  }
  clockBtn.setAttribute("aria-expanded", "false");
  soundBtn.setAttribute("aria-expanded", "false");
  netBtn.setAttribute("aria-expanded", "false");
  battBtn.setAttribute("aria-expanded", "false");
  notifBtn.setAttribute("aria-expanded", "false");
  powerBtn.setAttribute("aria-expanded", "false");
  if (except === calendarPopover) clockBtn.setAttribute("aria-expanded", "true");
  if (except === soundPopover) soundBtn.setAttribute("aria-expanded", "true");
  if (except === netPopover) netBtn.setAttribute("aria-expanded", "true");
  if (except === battPopover) battBtn.setAttribute("aria-expanded", "true");
  if (except === notifPopover) notifBtn.setAttribute("aria-expanded", "true");
  if (except === powerPopover) powerBtn.setAttribute("aria-expanded", "true");
}

function togglePopover(popover, btn) {
  const open = popover.hidden;
  closeAllPopovers(open ? popover : null);
  popover.hidden = !open;
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  if (open && popover === calendarPopover) {
    setViewToToday();
    buildCalendar();
    tickClock();
  }
}

clockBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(calendarPopover, clockBtn);
});

soundBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(soundPopover, soundBtn);
});

netBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(netPopover, netBtn);
});

battBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(battPopover, battBtn);
});

notifBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(notifPopover, notifBtn);
});

powerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(powerPopover, powerBtn);
});

volumeSlider.addEventListener("input", () => {
  volumePct.textContent = `${volumeSlider.value}%`;
});

for (const p of POPOVERS) {
  p.addEventListener("click", (e) => e.stopPropagation());
}

/* ---------- Launcher ---------- */

function openLauncher() {
  closeAllPopovers();
  closeAppLibrary();
  closeWorkspacesOverview();
  launcher.hidden = false;
  launcherSearch.value = "";
  launcherFocus = 0;
  renderLauncherResults("");
  requestAnimationFrame(() => launcherSearch.focus());
}

function closeLauncher() {
  launcher.hidden = true;
  launcherSearch.value = "";
}

function renderLauncherResults(query) {
  const q = query.trim().toLowerCase();
  const matches = APPS.filter(
    (a) =>
      !q ||
      a.name.toLowerCase().includes(q) ||
      (a.desc && a.desc.toLowerCase().includes(q))
  );

  launcherResults.innerHTML = "";
  launcherEmpty.hidden = matches.length > 0;

  matches.forEach((app, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "launcher-item" + (i === launcherFocus ? " focused" : "");
    btn.setAttribute("role", "listitem");
    btn.innerHTML = `
      <img src="${app.icon}" alt="" draggable="false" />
      <span>
        <span class="launcher-item-name">${escapeHtml(app.name)}</span>
        <span class="launcher-item-desc">${escapeHtml(app.desc || "")}</span>
      </span>
    `;
    btn.addEventListener("click", () => launchApp(app.id));
    launcherResults.appendChild(btn);
  });
}

launcherSearch.addEventListener("input", () => {
  launcherFocus = 0;
  renderLauncherResults(launcherSearch.value);
});

launcherSearch.addEventListener("keydown", (e) => {
  const items = [...launcherResults.querySelectorAll(".launcher-item")];
  if (e.key === "ArrowDown") {
    e.preventDefault();
    launcherFocus = Math.min(launcherFocus + 1, items.length - 1);
    items.forEach((el, i) => el.classList.toggle("focused", i === launcherFocus));
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    launcherFocus = Math.max(launcherFocus - 1, 0);
    items.forEach((el, i) => el.classList.toggle("focused", i === launcherFocus));
  } else if (e.key === "Enter") {
    e.preventDefault();
    const focused = items[launcherFocus];
    if (focused) focused.click();
  } else if (e.key === "Escape") {
    closeLauncher();
  }
});

dockLauncherBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (launcher.hidden) openLauncher();
  else closeLauncher();
});

launcher.addEventListener("click", (e) => {
  if (e.target === launcher) closeLauncher();
});

/* ---------- App Library ---------- */

function openAppLibrary() {
  closeAllPopovers();
  closeLauncher();
  closeWorkspacesOverview();
  appLibrary.hidden = false;
  panelAppLibraryBtn.setAttribute("aria-expanded", "true");
  librarySearch.value = "";
  currentGroup = "home";
  renderGroups();
  renderLibraryApps();
  requestAnimationFrame(() => librarySearch.focus());
}

function closeAppLibrary() {
  appLibrary.hidden = true;
  panelAppLibraryBtn.setAttribute("aria-expanded", "false");
  librarySearch.value = "";
}

function renderGroups() {
  appLibraryGroups.innerHTML = "";
  for (const g of GROUPS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "app-group-btn" + (g.id === currentGroup ? " active" : "");
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", g.id === currentGroup ? "true" : "false");
    btn.innerHTML = `<img src="${g.icon}" alt="" draggable="false" /><span>${escapeHtml(g.name)}</span>`;
    btn.addEventListener("click", () => {
      currentGroup = g.id;
      librarySearch.value = "";
      renderGroups();
      renderLibraryApps();
    });
    appLibraryGroups.appendChild(btn);
  }
}

function renderLibraryApps() {
  const q = librarySearch.value.trim().toLowerCase();
  let list = APPS.filter((a) => a.groups.includes(currentGroup));
  if (q) {
    list = APPS.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        (a.desc && a.desc.toLowerCase().includes(q))
    );
  }

  appLibraryGrid.innerHTML = "";
  appLibraryEmpty.hidden = list.length > 0;

  for (const app of list) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "app-tile";
    btn.setAttribute("role", "listitem");
    btn.title = app.desc || app.name;
    btn.innerHTML = `
      <img src="${app.icon}" alt="" draggable="false" />
      <span class="app-tile-name">${escapeHtml(app.name)}</span>
    `;
    btn.addEventListener("click", () => launchApp(app.id));
    appLibraryGrid.appendChild(btn);
  }
}

librarySearch.addEventListener("input", renderLibraryApps);

librarySearch.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAppLibrary();
});

panelAppLibraryBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (appLibrary.hidden) openAppLibrary();
  else closeAppLibrary();
});

dockAppLibraryBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (appLibrary.hidden) openAppLibrary();
  else closeAppLibrary();
});

appLibrary.addEventListener("click", (e) => {
  if (e.target === appLibrary) closeAppLibrary();
});

/* ---------- Dock apps ---------- */

function renderDock() {
  dockApps.innerHTML = "";
  const pinned = APPS.filter((a) => a.dock);
  for (const app of pinned) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dock-app";
    btn.dataset.app = app.id;
    btn.title = app.name;
    btn.setAttribute("aria-label", app.name);
    btn.innerHTML = `<img src="${app.icon}" alt="" draggable="false" />`;
    btn.addEventListener("click", () => launchApp(app.id));
    dockApps.appendChild(btn);
  }
}

function setDockRunning(appId, running) {
  const btn = dockApps.querySelector(`[data-app="${appId}"]`);
  if (btn) {
    btn.classList.toggle("running", running);
    btn.classList.toggle("active", running && appId === "files" && !filesWindow.hidden);
  }
}

/* ---------- Launch ---------- */

function launchApp(id) {
  closeLauncher();
  closeAppLibrary();
  closeWorkspacesOverview();
  closeAllPopovers();

  if (id === "files") {
    openFiles();
    return;
  }

  // Visual feedback for other apps
  setDockRunning(id, true);
  setTimeout(() => setDockRunning(id, false), 1200);
}

/* ---------- Workspaces Overview ---------- */

function openWorkspacesOverview() {
  closeAllPopovers();
  closeLauncher();
  closeAppLibrary();
  workspacesOverview.hidden = false;
  desktop.classList.add("overview-open");
  panelWorkspacesBtn.setAttribute("aria-expanded", "true");
  dockWorkspacesBtn.setAttribute("aria-expanded", "true");
  renderWorkspacesOverview();
}

function closeWorkspacesOverview() {
  workspacesOverview.hidden = true;
  desktop.classList.remove("overview-open");
  panelWorkspacesBtn.setAttribute("aria-expanded", "false");
  dockWorkspacesBtn.setAttribute("aria-expanded", "false");
}

function toggleWorkspacesOverview() {
  if (workspacesOverview.hidden) openWorkspacesOverview();
  else closeWorkspacesOverview();
}

function activateWorkspace(index) {
  if (index < 0 || index >= workspaces.length) return;
  activeWorkspace = index;
  // Files mock lives on workspace 1 (index 0)
  const filesOnWs =
    workspaces[0] && workspaces[0].windows.some((w) => w.id === "win-files");
  if (activeWorkspace === 0 && filesOnWs) {
    filesWindow.hidden = false;
    setDockRunning("files", true);
    const dockBtn = dockApps.querySelector('[data-app="files"]');
    if (dockBtn) dockBtn.classList.add("active");
  } else {
    filesWindow.hidden = true;
    setDockRunning("files", false);
    const dockBtn = dockApps.querySelector('[data-app="files"]');
    if (dockBtn) dockBtn.classList.remove("active");
  }
  renderWorkspacesOverview();
}

function addWorkspace() {
  const n = workspaces.length + 1;
  workspaces.push({ id: n, name: String(n), windows: [] });
  activeWorkspace = workspaces.length - 1;
  renderWorkspacesOverview();
}

function removeWindowFromWorkspace(wsIndex, winId) {
  const ws = workspaces[wsIndex];
  if (!ws) return;
  ws.windows = ws.windows.filter((w) => w.id !== winId);
  if (winId === "win-files") {
    filesWindow.hidden = true;
    setDockRunning("files", false);
    const dockBtn = dockApps.querySelector('[data-app="files"]');
    if (dockBtn) dockBtn.classList.remove("active");
  }
  renderWorkspacesOverview();
}

function focusWindow(win) {
  closeWorkspacesOverview();
  if (win.app === "files") {
    openFiles();
  } else {
    setDockRunning(win.app, true);
    setTimeout(() => setDockRunning(win.app, false), 1200);
  }
}

function miniWindowsMarkup(windows) {
  if (!windows.length) return "";
  const slots = ["w1", "w2", "w3"];
  return windows
    .slice(0, 3)
    .map((w, i) => {
      return `<div class="ws-mini-win ${slots[i]}">
        <div class="ws-mini-titlebar"><span class="ws-mini-dot"></span><span class="ws-mini-dot"></span><span class="ws-mini-dot"></span></div>
        <div class="ws-mini-body"><img src="${w.icon}" alt="" draggable="false" /></div>
      </div>`;
    })
    .join("");
}

function windowBodyMarkup(win) {
  if (win.kind === "files") {
    return `<div class="preview-files">
      <div class="preview-files-side"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="preview-files-main">
        <div class="row"><i></i><b></b></div>
        <div class="row"><i></i><b></b></div>
        <div class="row"><i></i><b></b></div>
        <div class="row"><i></i><b></b></div>
        <div class="row"><i></i><b></b></div>
      </div>
    </div>`;
  }
  if (win.kind === "terminal") {
    return `<div class="preview-term">
      <div><span class="dim">leon@pop-os</span>:~$ uname -a</div>
      <div>Linux pop-os 6.12.0-… x86_64</div>
      <div><span class="dim">leon@pop-os</span>:~$ ▌</div>
    </div>`;
  }
  if (win.kind === "browser") {
    return `<div class="preview-browser"><div class="urlbar"></div><div class="page"></div></div>`;
  }
  return `<div class="preview-generic"><img src="${win.icon}" alt="" draggable="false" /></div>`;
}

function renderWorkspacesOverview() {
  // Sidebar thumbnails
  wsSidebar.innerHTML = "";
  workspaces.forEach((ws, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ws-item" + (index === activeWorkspace ? " active" : "");
    btn.setAttribute("aria-current", index === activeWorkspace ? "true" : "false");
    btn.innerHTML = `
      <div class="ws-thumb" aria-hidden="true">
        <div class="ws-thumb-wallpaper"></div>
        <div class="ws-thumb-windows">${miniWindowsMarkup(ws.windows)}</div>
      </div>
      <div class="ws-item-footer">
        <span class="ws-item-label">Workspace ${escapeHtml(ws.name)}</span>
      </div>
    `;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Cosmic: activate workspace; overview stays open until Escape / empty click / window focus
      if (index === activeWorkspace) {
        closeWorkspacesOverview();
      } else {
        activateWorkspace(index);
      }
    });
    wsSidebar.appendChild(btn);
  });

  // New Workspace
  const newBtn = document.createElement("button");
  newBtn.type = "button";
  newBtn.className = "ws-new";
  newBtn.innerHTML = `
    <span class="ws-new-plus" aria-hidden="true">+</span>
    <span class="ws-new-label">New Workspace</span>
  `;
  newBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addWorkspace();
  });
  wsSidebar.appendChild(newBtn);

  // Toplevel previews for active workspace
  const active = workspaces[activeWorkspace];
  wsToplevels.innerHTML = "";
  if (!active || active.windows.length === 0) {
    const empty = document.createElement("div");
    empty.className = "ws-toplevels-empty";
    empty.textContent = "No open windows";
    wsToplevels.appendChild(empty);
    return;
  }

  active.windows.forEach((win) => {
    const card = document.createElement("div");
    card.className = "ws-window";
    card.setAttribute("role", "button");
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="ws-window-header">
        <img class="app-icon" src="${win.icon}" alt="" draggable="false" />
        <span class="ws-window-title">${escapeHtml(win.title)}</span>
        <button type="button" class="ws-window-close" title="Close" aria-label="Close ${escapeHtml(win.title)}">
          <img class="sym" src="assets/actions/window-close-symbolic.svg" alt="" draggable="false" />
        </button>
      </div>
      <div class="ws-window-body">${windowBodyMarkup(win)}</div>
    `;
    card.querySelector(".ws-window-close").addEventListener("click", (e) => {
      e.stopPropagation();
      removeWindowFromWorkspace(activeWorkspace, win.id);
    });
    card.addEventListener("click", () => focusWindow(win));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        focusWindow(win);
      }
    });
    wsToplevels.appendChild(card);
  });
}

panelWorkspacesBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleWorkspacesOverview();
});

dockWorkspacesBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleWorkspacesOverview();
});

workspacesOverview.addEventListener("click", (e) => {
  // Click empty backdrop / empty toplevel area closes overview
  if (e.target === workspacesOverview || e.target.classList.contains("ws-layout") || e.target === wsToplevels) {
    closeWorkspacesOverview();
  }
});

/* ---------- COSMIC Files ---------- */

function openFiles(place = "home") {
  // Files mock lives on workspace 1
  activeWorkspace = 0;
  // Ensure Files is represented on WS1
  const ws0 = workspaces[0];
  if (ws0 && !ws0.windows.some((w) => w.id === "win-files")) {
    ws0.windows.unshift({
      id: "win-files",
      title: "Home",
      app: "files",
      icon: "assets/apps/com.system76.CosmicFiles.svg",
      kind: "files",
    });
  }
  filesWindow.hidden = false;
  navigateFiles(place, { push: true, reset: true });
  setDockRunning("files", true);
  const dockBtn = dockApps.querySelector('[data-app="files"]');
  if (dockBtn) dockBtn.classList.add("active");
}

function closeFiles() {
  filesWindow.hidden = true;
  filesMenuPopup.hidden = true;
  filesMenuBtn.setAttribute("aria-expanded", "false");
  setDockRunning("files", false);
  const dockBtn = dockApps.querySelector('[data-app="files"]');
  if (dockBtn) dockBtn.classList.remove("active");
  // Drop from workspace 1 window list so overview stays accurate
  if (workspaces[0]) {
    workspaces[0].windows = workspaces[0].windows.filter((w) => w.id !== "win-files");
  }
}

function navigateFiles(place, { push = true, reset = false } = {}) {
  if (!FS[place]) place = "home";
  currentPlace = place;

  if (reset) {
    filesHistory = [place];
    filesHistIndex = 0;
  } else if (push) {
    filesHistory = filesHistory.slice(0, filesHistIndex + 1);
    filesHistory.push(place);
    filesHistIndex = filesHistory.length - 1;
  }

  filesBack.disabled = filesHistIndex <= 0;
  filesForward.disabled = filesHistIndex >= filesHistory.length - 1;

  const loc = FS[place];
  filesHeaderTitle.textContent = loc.label;
  filesPathLabel.textContent = loc.label;
  filesWindow.setAttribute("aria-label", loc.label);

  renderSidebar();
  renderFilesContent();
}

function renderSidebar() {
  filesSidebar.innerHTML = "";
  for (const item of SIDEBAR) {
    if (item.sep) {
      const sep = document.createElement("div");
      sep.className = "files-sidebar-sep";
      sep.setAttribute("role", "separator");
      filesSidebar.appendChild(sep);
      continue;
    }
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "files-sidebar-item" + (item.id === currentPlace ? " active" : "");
    btn.innerHTML = `<img src="${item.icon}" alt="" draggable="false" /><span>${escapeHtml(item.label)}</span>`;
    btn.addEventListener("click", () => navigateFiles(item.id));
    filesSidebar.appendChild(btn);
  }
}

function renderFilesContent() {
  const loc = FS[currentPlace];
  let items = [...(loc.items || [])];
  const q = filesSearchInput.value.trim().toLowerCase();
  if (q && !filesSearchBar.hidden) {
    items = items.filter((it) => it.name.toLowerCase().includes(q));
  }

  // Keep header, replace rows
  const header = filesContent.querySelector(".files-list-header");
  filesContent.innerHTML = "";
  if (header) filesContent.appendChild(header);
  else {
    const h = document.createElement("div");
    h.className = "files-list-header";
    h.setAttribute("aria-hidden", "true");
    h.innerHTML = `
      <span class="flh-icon"></span>
      <span class="flh-name">Name</span>
      <span class="flh-modified">Modified</span>
      <span class="flh-size">Size</span>
    `;
    filesContent.appendChild(h);
  }

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "files-empty";
    empty.textContent =
      currentPlace === "trash"
        ? "Trash is empty"
        : currentPlace === "recents"
          ? "No recent files"
          : currentPlace === "networks"
            ? "No networks"
            : "Empty folder";
    filesContent.appendChild(empty);
    return;
  }

  for (const item of items) {
    const row = document.createElement("div");
    row.className = "files-row";
    row.setAttribute("role", "listitem");
    row.tabIndex = 0;
    row.innerHTML = `
      <img src="${item.icon}" alt="" draggable="false" />
      <span class="files-row-name">${escapeHtml(item.name)}</span>
      <span class="files-row-modified">${escapeHtml(item.modified || "—")}</span>
      <span class="files-row-size">${escapeHtml(item.size || "—")}</span>
    `;
    row.addEventListener("click", () => {
      filesContent.querySelectorAll(".files-row").forEach((r) => r.classList.remove("selected"));
      row.classList.add("selected");
    });
    row.addEventListener("dblclick", () => {
      if (item.type === "folder" && item.place) navigateFiles(item.place);
    });
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && item.type === "folder" && item.place) navigateFiles(item.place);
    });
    filesContent.appendChild(row);
  }
}

filesClose.addEventListener("click", closeFiles);

filesBack.addEventListener("click", () => {
  if (filesHistIndex > 0) {
    filesHistIndex -= 1;
    navigateFiles(filesHistory[filesHistIndex], { push: false });
  }
});

filesForward.addEventListener("click", () => {
  if (filesHistIndex < filesHistory.length - 1) {
    filesHistIndex += 1;
    navigateFiles(filesHistory[filesHistIndex], { push: false });
  }
});

filesSidebarToggle.addEventListener("click", () => {
  const collapsed = filesWindow.classList.toggle("sidebar-collapsed");
  filesSidebarToggle.setAttribute("aria-pressed", collapsed ? "false" : "true");
  const icon = filesSidebarToggle.querySelector("img");
  if (icon) {
    icon.src = collapsed
      ? "assets/actions/navbar-closed-symbolic.svg"
      : "assets/actions/navbar-open-symbolic.svg";
  }
});

filesSearchToggle.addEventListener("click", () => {
  const open = filesSearchBar.hidden;
  filesSearchBar.hidden = !open;
  filesSearchToggle.setAttribute("aria-pressed", open ? "true" : "false");
  if (open) {
    filesSearchInput.focus();
  } else {
    filesSearchInput.value = "";
    renderFilesContent();
  }
});

filesSearchInput.addEventListener("input", renderFilesContent);

filesViewList.addEventListener("click", () => {
  filesView = "list";
  filesContent.classList.remove("view-grid");
  filesContent.classList.add("view-list");
  filesViewList.classList.add("active");
  filesViewList.setAttribute("aria-pressed", "true");
  filesViewGrid.classList.remove("active");
  filesViewGrid.setAttribute("aria-pressed", "false");
});

filesViewGrid.addEventListener("click", () => {
  filesView = "grid";
  filesContent.classList.remove("view-list");
  filesContent.classList.add("view-grid");
  filesViewGrid.classList.add("active");
  filesViewGrid.setAttribute("aria-pressed", "true");
  filesViewList.classList.remove("active");
  filesViewList.setAttribute("aria-pressed", "false");
});

filesMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = filesMenuPopup.hidden;
  filesMenuPopup.hidden = !open;
  filesMenuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelector(".files-max")?.addEventListener("click", () => {
  filesWindow.classList.toggle("maximized");
});

document.querySelector(".files-min")?.addEventListener("click", () => {
  // Preview: minimize just closes
  closeFiles();
});

/* ---------- Global click / keyboard ---------- */

document.addEventListener("click", () => {
  closeAllPopovers();
  filesMenuPopup.hidden = true;
  filesMenuBtn.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!launcher.hidden) {
      closeLauncher();
      return;
    }
    if (!appLibrary.hidden) {
      closeAppLibrary();
      return;
    }
    if (!workspacesOverview.hidden) {
      closeWorkspacesOverview();
      return;
    }
    if (!filesMenuPopup.hidden) {
      filesMenuPopup.hidden = true;
      filesMenuBtn.setAttribute("aria-expanded", "false");
      return;
    }
    closeAllPopovers();
  }

  // Super+Y / Super+F commonly open workspaces overview in Cosmic docs
  if ((e.key === "y" || e.key === "Y" || e.key === "f" || e.key === "F") && e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault();
    toggleWorkspacesOverview();
    return;
  }

  // Super key opens launcher (when not typing in inputs)
  if (e.key === "Meta" || (e.key === "Super" && !e.repeat)) {
    // Meta alone is hard to capture reliably; Super+Space is common alt
  }

  if (e.key === " " && e.ctrlKey === false && e.metaKey) {
    e.preventDefault();
    if (launcher.hidden) openLauncher();
    else closeLauncher();
  }
});

/* Super key: many browsers block Meta alone; use Super+L pattern via keyup Meta */
let metaDown = false;
document.addEventListener("keydown", (e) => {
  if (e.key === "Meta") metaDown = true;
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Meta" && metaDown) {
    metaDown = false;
    // Only toggle if no other key was pressed while Meta held — simplified: open launcher
    const tag = document.activeElement?.tagName;
    if (tag !== "INPUT" && tag !== "TEXTAREA") {
      if (launcher.hidden && appLibrary.hidden) openLauncher();
      else if (!launcher.hidden) closeLauncher();
    }
  }
});

/* ---------- Utils ---------- */

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Init ---------- */

renderDock();
renderGroups();
