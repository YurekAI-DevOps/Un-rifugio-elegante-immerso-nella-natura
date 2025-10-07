import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "5SiLj4tjVCoV98gXo9PhBm";
export const projectApiToken = "O6pXFLr3t99Q2e86jbgPZgho3YAczVjMrdjUEhkEt4vdbmrOaQX5ehfpZn70643YxCcy6Y3IEP2gK9yddJA";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
