import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menuLink';
    icon: 'alien';
    description: '';
  };
  attributes: {
    link: Attribute.Text & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-link': MenuMenuLink;
    }
  }
}
