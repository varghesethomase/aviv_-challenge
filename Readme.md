# Filter Modal

The scope of this task was to create a modal with the following features and their implementation status:

- [x] A button is provided.
- [x] The modal opens when the button is clicked.
- [x] The modal opens with a fade in transition.
- [x] The modal closes with a fade out transition.
- [x] The modal has a button. The modal closes when the button in the modal is clicked.
- [x] If the content of the modal exceeds the size of the modal it is possible to scroll in the modal(optional)
- [x] In mobile view the modal is displayed in fullscreen.(optional)
- [x] In desktop view the modal has a fixed size.(optional)
- [x] In desktop view the mod al can be closed with a click outside the modal.

## Commands

### Commands used:

| Commands |               Purpose                |
| -------- | :----------------------------------: |
| dev      |   Run the application in dev mode    |
| build    | Build the application for production |
| test     |      Runs the test using vitest      |

## General project structure:

The project has the following structure:
| Folder | Purpose  
| ---------- |:----------------------------------------:|
| configs | Holds the configs for the project |
| components | Has the resuable components of the application |
| hooks | Holds the custom hooks used |
| mocks | Mocks for both tests and mock server |

## Architecture

The project is scaffolded using [Vite](https://vitejs.dev/) with react and typescript.

The modal is architected using the [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element. This allows to use the native browser api to meet this tasks requirements. The choice was also made taking into consideration the aspects of accessibility example focus trapping and more. It was also taken into consideration that dialog is now supported by ~ 95% of the browsers as shown [here](https://caniuse.com/dialog). And to extend its support for older browsers, the [polyfill](https://github.com/GoogleChrome/dialog-polyfill) could be used. By using the `showModal` method on the dialog, it helps to announce the content as a dialog, similar to that using `role="dialog"` and also has `aria-modal="true"`. It also adds `inert` attribute to all other contents to ignore the other elements. The modal is developed as a standalone component and hence can be reused.

The dialog component is expected to provide with the bare minimals required for each modal and the contents being rendered are hence passed as children. It also provides a mechanism to customise the styling of the modal by having the ability to pass css classes which would help in overriding the default styles. It also has provides controls with a set of props passed to control the functionality of the modal. The following are the accepted props and their purpose:

| Props                     | Type      |                      Purpose                       |
| ------------------------- | --------- | :------------------------------------------------: |
| children                  | ReactNode |               Contents of the modal                |
| isOpen                    | boolean   |           Flag to show or hide the modal           |
| shouldCloseOnOverlayClick | boolean   |       Control the modal behavior on clicking       |
| shouldCloseOnEsc          | boolean   | Control the modal behavior on pressing the esc key |
| classes                   | string    |           CSS classes to ustomise styles           |

### Testing

For testing, vitest is used as the test runner. This comes with a lot of advantages over Jest by allowing to reuse the Vite.js configurations and not needing to provide custom configurations only for testing. Together with the same, [Testing Library](https://testing-library.com/docs/react-testing-library/api/) is used to perform integration testing. To accomodate cases where API calls are involved, [MSW](https://mswjs.io/) is also integrated.

### Additional considerations

I had assumed that in a real world scenario the filters should be configurable. And hence the data comes from an API. To accomodate these cases, I have used [React Query](https://tanstack.com/query/v5) together with [React Query Kit](https://tanstack.com/query/v4/docs/react/community/liaoliao666-react-query-kit) to build reusable hooks for fetching the data.

## Other take aways

<ol>
  <li>
    When opening the modal, the focus goes to the only button at the bottom of the screen and is expected as the focus is trapped.
  </li>
  <li>
    Tests fails with <a href="https://github.com/capricorn86/happy-dom">happy-dom</a> when testing react hooks and hence JSDOM had to be used as the testing environment while testing the same. Also in JSDOM testing `dialog` is not yet support. The issue discussing the same could be found <a href="https://github.com/jsdom/jsdom/issues/3294">here</a>. The test environment could be set using `// @vitest-environment jsdom` in the beginning of the test file.
  </li>
</ol>
