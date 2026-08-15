import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLink = {
  readonly label: string;
  readonly href: string;
  readonly icon: IconComponent;
};

export type ThemeMode = "light" | "dark";

export type InquiryTopic = "project" | "advisory" | "other";

export type ContactFormData = {
  name: string;
  email: string;
  topic: InquiryTopic;
  message: string;
};

export type HighlightIconType = "consulting" | "leadership" | "teamBuilding";

export type HighlightItem = {
  readonly icon: HighlightIconType;
  readonly title: string;
  readonly description: string;
};

export type ContactFormStrings = {
  readonly modalTitle: string;
  readonly modalSubtitle: string;
  readonly nameLabel: string;
  readonly namePlaceholder: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly topicLabel: string;
  readonly topicOptions: Record<InquiryTopic, string>;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly submitButton: string;
  readonly submittingButton: string;
  readonly successTitle: string;
  readonly successMessage: string;
  readonly closeButton: string;
  readonly sendAnother: string;
  readonly orConnectDirectly: string;
};

export type Dictionary = {
  readonly name: string;
  readonly title: string;
  readonly bio: string;
  readonly cta: string;
  readonly description: string;
  readonly location: string;
  readonly status: string;
  readonly contactButton: string;
  readonly focusAreasLabel: string;
  readonly connectLabel: string;
  readonly highlights: readonly HighlightItem[];
  readonly contactModal: ContactFormStrings;
};
