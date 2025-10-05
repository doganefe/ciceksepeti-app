export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: readonly FooterLink[];
}

export interface FooterProps {
  logo: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  sections: readonly FooterSection[];
  privacyText: string;
  privacyLink: string;
  description: string;
  copyright: string;
}
