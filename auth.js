const ACCESS_STORAGE_KEY = 'noirStaffAccess';

function getSavedAccess(){
  try { return JSON.parse(localStorage.getItem(ACCESS_STORAGE_KEY)); } catch { return null; }
}

function saveAccess(code, role){
  localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify({ code, role }));
}

function clearAccess(){
  localStorage.removeItem(ACCESS_STORAGE_KEY);
}

function accessRoleForCode(code){
  if (!code) return null;
  const normalized = code.trim();
  if (Array.isArray(ACCESS_CODES.all) && ACCESS_CODES.all.includes(normalized)) return 'all';
  if (Array.isArray(ACCESS_CODES.kitchen) && ACCESS_CODES.kitchen.includes(normalized)) return 'kitchen';
  if (Array.isArray(ACCESS_CODES.floor) && ACCESS_CODES.floor.includes(normalized)) return 'floor';
  return null;
}

function userHasAccess(requiredRole){
  const saved = getSavedAccess();
  if (!saved) return false;
  return saved.role === 'all' || saved.role === requiredRole;
}

function canAccessPage(role, page){
  if (!page) return false;
  if (role === 'all') return true;
  const normalized = page.toLowerCase();
  if (role === 'kitchen' && normalized.endsWith('kitchen.html')) return true;
  if (role === 'floor' && normalized.endsWith('floor.html')) return true;
  return false;
}

function requireAccess(requiredRole){
  if (!userHasAccess(requiredRole)){
    const redirect = window.location.pathname.split('/').pop();
    window.location.href = `index.html?redirect=${encodeURIComponent(redirect)}`;
  }
}
