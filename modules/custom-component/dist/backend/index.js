"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// These are required even if they aren't used
const onServerStarted = async bp => {};

const onServerReady = async bp => {}; // This is not required for the custom component, but it makes it easier to test this example


const botTemplates = [{
  id: 'custom-component-demo',
  name: 'Demo - Custom Components',
  desc: `This module shows how to implement custom components on channel web`
}];
const entryPoint = {
  onServerStarted,
  onServerReady,
  botTemplates,
  definition: {
    name: 'custom-component',
    menuIcon: 'none',
    menuText: 'Custom Component',
    fullName: 'My Custom Component',
    noInterface: true,
    // This prevents your module from being displayed in the menu, since we only add custom components here
    homepage: 'https://botpress.io'
  }
};
var _default = entryPoint;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbIm9uU2VydmVyU3RhcnRlZCIsImJwIiwib25TZXJ2ZXJSZWFkeSIsImJvdFRlbXBsYXRlcyIsImlkIiwibmFtZSIsImRlc2MiLCJlbnRyeVBvaW50IiwiZGVmaW5pdGlvbiIsIm1lbnVJY29uIiwibWVudVRleHQiLCJmdWxsTmFtZSIsIm5vSW50ZXJmYWNlIiwiaG9tZXBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTtBQUNBLE1BQU1BLGVBQWUsR0FBRyxNQUFPQyxFQUFQLElBQTBCLENBQUUsQ0FBcEQ7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHLE1BQU9ELEVBQVAsSUFBMEIsQ0FBRSxDQUFsRCxDLENBRUE7OztBQUNBLE1BQU1FLFlBQStCLEdBQUcsQ0FDdEM7QUFDRUMsRUFBQUEsRUFBRSxFQUFFLHVCQUROO0FBRUVDLEVBQUFBLElBQUksRUFBRSwwQkFGUjtBQUdFQyxFQUFBQSxJQUFJLEVBQUc7QUFIVCxDQURzQyxDQUF4QztBQVFBLE1BQU1DLFVBQWdDLEdBQUc7QUFDdkNQLEVBQUFBLGVBRHVDO0FBRXZDRSxFQUFBQSxhQUZ1QztBQUd2Q0MsRUFBQUEsWUFIdUM7QUFJdkNLLEVBQUFBLFVBQVUsRUFBRTtBQUNWSCxJQUFBQSxJQUFJLEVBQUUsa0JBREk7QUFFVkksSUFBQUEsUUFBUSxFQUFFLE1BRkE7QUFHVkMsSUFBQUEsUUFBUSxFQUFFLGtCQUhBO0FBSVZDLElBQUFBLFFBQVEsRUFBRSxxQkFKQTtBQUtWQyxJQUFBQSxXQUFXLEVBQUUsSUFMSDtBQUtTO0FBQ25CQyxJQUFBQSxRQUFRLEVBQUU7QUFOQTtBQUoyQixDQUF6QztlQWNlTixVIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yZW5hdWQvQ29kZS9Cb3RwcmVzcy9ib3RwcmVzcy9tb2R1bGVzL2N1c3RvbS1jb21wb25lbnQvc3JjL2JhY2tlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzZGsgZnJvbSAnYm90cHJlc3Mvc2RrJ1xuXG4vLyBUaGVzZSBhcmUgcmVxdWlyZWQgZXZlbiBpZiB0aGV5IGFyZW4ndCB1c2VkXG5jb25zdCBvblNlcnZlclN0YXJ0ZWQgPSBhc3luYyAoYnA6IHR5cGVvZiBzZGspID0+IHt9XG5jb25zdCBvblNlcnZlclJlYWR5ID0gYXN5bmMgKGJwOiB0eXBlb2Ygc2RrKSA9PiB7fVxuXG4vLyBUaGlzIGlzIG5vdCByZXF1aXJlZCBmb3IgdGhlIGN1c3RvbSBjb21wb25lbnQsIGJ1dCBpdCBtYWtlcyBpdCBlYXNpZXIgdG8gdGVzdCB0aGlzIGV4YW1wbGVcbmNvbnN0IGJvdFRlbXBsYXRlczogc2RrLkJvdFRlbXBsYXRlW10gPSBbXG4gIHtcbiAgICBpZDogJ2N1c3RvbS1jb21wb25lbnQtZGVtbycsXG4gICAgbmFtZTogJ0RlbW8gLSBDdXN0b20gQ29tcG9uZW50cycsXG4gICAgZGVzYzogYFRoaXMgbW9kdWxlIHNob3dzIGhvdyB0byBpbXBsZW1lbnQgY3VzdG9tIGNvbXBvbmVudHMgb24gY2hhbm5lbCB3ZWJgXG4gIH1cbl1cblxuY29uc3QgZW50cnlQb2ludDogc2RrLk1vZHVsZUVudHJ5UG9pbnQgPSB7XG4gIG9uU2VydmVyU3RhcnRlZCxcbiAgb25TZXJ2ZXJSZWFkeSxcbiAgYm90VGVtcGxhdGVzLFxuICBkZWZpbml0aW9uOiB7XG4gICAgbmFtZTogJ2N1c3RvbS1jb21wb25lbnQnLFxuICAgIG1lbnVJY29uOiAnbm9uZScsXG4gICAgbWVudVRleHQ6ICdDdXN0b20gQ29tcG9uZW50JyxcbiAgICBmdWxsTmFtZTogJ015IEN1c3RvbSBDb21wb25lbnQnLFxuICAgIG5vSW50ZXJmYWNlOiB0cnVlLCAvLyBUaGlzIHByZXZlbnRzIHlvdXIgbW9kdWxlIGZyb20gYmVpbmcgZGlzcGxheWVkIGluIHRoZSBtZW51LCBzaW5jZSB3ZSBvbmx5IGFkZCBjdXN0b20gY29tcG9uZW50cyBoZXJlXG4gICAgaG9tZXBhZ2U6ICdodHRwczovL2JvdHByZXNzLmlvJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVudHJ5UG9pbnRcbiJdfQ==