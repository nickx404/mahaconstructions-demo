export const sitePath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const siteRoute = () => {
  const base = import.meta.env.BASE_URL;
  return `/${window.location.pathname.slice(base === '/' ? 1 : base.length).replace(/\/$/, '')}` || '/';
};
