import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";
import { defaultLandingPage } from "@/lib/defaults";
import type { LandingPageData } from "@/types/sanity";

const LANDING_PAGE_QUERY = `*[_type == "landingPage" && _id == "landingPage"][0]{
  hero,
  video,
  testimonialsHeadline,
  testimonialsHeadlineAccent,
  testimonialsSubtitle,
  testimonials[]{
    quote,
    name,
    industry,
    image,
    videoUrl
  },
  mattStory,
  catherineStory,
  willStory,
  problem,
  compass,
  training,
  usage,
  clientsCreateHeadline,
  clientsCreateHeadlineAccent,
  clientsCreateSubtitle,
  clientCards[]{
    name,
    result,
    image
  },
  builtBetter,
  audience,
  whatChanges,
  whatYouGet,
  teamHeadline,
  teamHeadlineAccent,
  teamMembers[]{
    name,
    desc,
    image
  },
  pricing,
  guarantee,
  faqHeadline,
  faqHeadlineAccent,
  faqItems[]{
    question,
    answer
  },
  footer
}`;

export function useLandingPage() {
  return useQuery<LandingPageData>({
    queryKey: ["landingPage"],
    queryFn: async () => {
      const data = await sanityClient.fetch(LANDING_PAGE_QUERY);
      if (!data) return defaultLandingPage;
      return data;
    },
    staleTime: 1 * 60 * 1000, // 1 minute
    refetchOnWindowFocus: true,
    placeholderData: defaultLandingPage,
  });
}
