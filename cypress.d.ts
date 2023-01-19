/// <reference types="cypress" />

import { mount } from 'cypress/vue2'

// type MountParams = Parameters<typeof mount>
// type OptionsParam = MountParams[1]

// declare namespace Cypress {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   interface Chainable<Subject = any> {
//       /**
//        * Custom command to ... add your description here
//        * @example cy.clickOnMyJourneyInCandidateCabinet()
//        */
//       // clickOnMyJourneyInCandidateCabinet(): Chainable<null>;
//       getBySelector(selector: string, ...params: any): void
//       mount: typeof mount
//   }
// }

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}
