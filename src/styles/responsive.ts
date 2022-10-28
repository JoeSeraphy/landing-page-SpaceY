const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
};

export const device = {
  mobileS: `(min-device-width: ${size.mobileS}) and (max-device-height: 800px)`,
  mobileM: `(min-device-width: ${size.mobileM}) and (max-device-height: 900px)`,
  mobileL: `(min-device-width: ${size.mobileL})`,
  tablet: `(min-device-width: ${size.tablet})`,
  laoptop: `(min-device-width: ${size.laptop})`,
};
