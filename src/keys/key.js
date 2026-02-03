
// export const emailKeys = {
//   serviceId: "service_zz8ryqu",
//   templateId: "template_ybmpcvb",
//   publicKey: "NKE4-2eKNQ0b7uNzN",
// };
export const emailKeys = {
  serviceId: "test_service",
  templateId: "test_template",
  publicKey: "test_key",
};

export const websiteConfig = {
  logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVhmvSUFyycIs7hc-K7dNbQd8TWw71a5w5g&s",
  web_name: "Jeevan Casting",
  web_url: "jeevancasting.in"
};

export const validationRegex = {
  name: /^[a-zA-Z\s]{2,50}$/,
  phone: /^[+]?[0-9]{10,15}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  age: /^[1-9][0-9]?$/,
  weight: /^[0-9]+(\.[0-9]+)?$/,
  url: /^https?:\/\/.+/
};
