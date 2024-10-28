# HuntAndHotkey
A Javascript Library for automatically hotkeying links in simple web pages, potentially improving usability.

To use, just add the file to your HTML DOM project, assign one or more portions of your document to the class HotkeyTarget and call 
```
HuntAndHotkey.assignHotkeysToLinks("1234567890qwertyuiopasdfghjklzxcvbnm")
```
where the passed string is the collection of keys that you wish to assign to the target.

The library will then add a "[1]" to the first <a> object, a "[2]" to the second object, and so on, and assign hotkeys to them, so pressing one is functionally the same as a click. 
