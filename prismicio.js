import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";

import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);
/**
 * The project's Prismic Link Resolver. This function determines the URL for a
 * given Prismic document.
 *
 * A Link Resolver is used rather than a Route Resolver because we need to
 * resolve URLs for documents' `alternate_languages` items. The
 * `alternate_languages` array does not include URLs.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc) => {
  if (doc.type === "page") {
    if (doc.uid === "home") {
      return `/${doc.lang}`;
    } else {
      return `/${doc.lang}/${doc.uid}`;
    }
  }
  if (doc.type === "archive") {
    return `/${doc.lang}/archive`;
  }
  if (doc.type === "news") {
    return `/${doc.lang}/news`;
  }
  if (doc.type === "event") {
    return `/${doc.lang}/events/${doc.uid}`;
  }
  if (doc.type === "location") {
    return `${doc.lang}/location/${doc.uid}`;
  }
  if (doc.type === "category") {
    return `${doc.lang}/category/${doc.uid}`;
  }

  return `/${doc.lang}`;
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = ({ previewData, req, ...config } = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config);

  prismicNext.enableAutoPreviews({ client, previewData, req });

  return client;
};
