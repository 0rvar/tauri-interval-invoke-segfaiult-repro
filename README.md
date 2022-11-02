# Tauri segfault on mac..

...when calling invoke in a timeout in a window that is closed

## Steps to reproduce

0. Ensure you use a mac. It might crash on other OSes too, but have not tested it.
1. Run `yarn tauri dev`
2. Close the window
3. Observe segfault
