const HuntAndHotkey = {
    assignHotkeysToLinksAndButtons: function (keyMapping, format = '[{key}]') {
      const hotkeyTarget = document.querySelector(".HotkeyTarget");
      if (!hotkeyTarget) return;
  
      const elements = hotkeyTarget.querySelectorAll("a, button");
  
      for (let i = 0; i < elements.length; i++) {
        const key = keyMapping[i];
        if (key && !this.isKeyAlreadyAssigned(key)) {
          this.assignKeyToElement(elements[i], key, format);
        }
      }
  
      document.addEventListener("keydown", this.handleKeyPress.bind(this));
    },
  
    assignHotkeysToLinks: function (keyMapping, format = '[{key}]') {
      const hotkeyTarget = document.querySelector(".HotkeyTarget");
      if (!hotkeyTarget) return;
  
      const links = hotkeyTarget.querySelectorAll("a");
  
      for (let i = 0; i < links.length; i++) {
        const key = keyMapping[i];
        if (key && !this.isKeyAlreadyAssigned(key)) {
          this.assignKeyToElement(links[i], key, format);
        }
      }
  
      document.addEventListener("keydown", this.handleKeyPress.bind(this));
    },
  
    assignHotkeysToButtons: function (keyMapping, format = '[{key}]') {
      const hotkeyTarget = document.querySelector(".HotkeyTarget");
      if (!hotkeyTarget) return;
  
      const buttons = hotkeyTarget.querySelectorAll("button");
  
      for (let i = 0; i < buttons.length; i++) {
        const key = keyMapping[i];
        if (key && !this.isKeyAlreadyAssigned(key)) {
          this.assignKeyToElement(buttons[i], key, format);
        }
      }
  
      document.addEventListener("keydown", this.handleKeyPress.bind(this));
    },
  
    isKeyAlreadyAssigned: function (key) {
      return document.querySelector(`a[data-link-key='${key.toLowerCase()}']`) !== null ||
             document.querySelector(`button[data-link-key='${key.toLowerCase()}']`) !== null;
    },
  
    assignKeyToElement: function (element, key, format) {
      const formattedKey = format.replace('{key}', key);
      element.innerHTML += ` ${formattedKey}`;
      element.setAttribute("data-link-key", key.toLowerCase());
    },
  
    handleKeyPress: function (event) {
      const pressedKey = event.key.toLowerCase();
      
      const link = document.querySelector(`a[data-link-key='${pressedKey}']`);
      const button = document.querySelector(`button[data-link-key='${pressedKey}']`);
      
      if (link) {
        link.click();
      } else if (button) {
        button.click();
      }
    }
  };
  
  // Example usage
  // HuntAndHotkey.assignHotkeysToLinks('1234567890qwertyuiopasdfghjklzxcvbnm');
  // HuntAndHotkey.assignHotkeysToButtons('1234567890qwertyuiopasdfghjklzxcvbnm', '<{key}>');
  // HuntAndHotkey.assignHotkeysToLinksAndButtons('1234567890qwertyuiopasdfghjklzxcvbnm', '[{key}]');
  
