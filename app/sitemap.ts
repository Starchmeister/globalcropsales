export default async function sitemap() {
  const baseUrl = "https://globalcropsales.com";
  return [
    {
      url: baseUrl,
      LastModified: new Date(),
    },
    {
      url: `${baseUrl}/about-us`,
      LastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/beans`,
      LastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/macadamia-nuts`,
      LastModified: new Date(),
    },
    {
      url: `${baseUrl}/products/peanuts`,
      LastModified: new Date(),
    },
    {
      url: `${baseUrl}/community-impact`,
      LastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact-us`,
      LastModified: new Date(),
    },
  ];
}
