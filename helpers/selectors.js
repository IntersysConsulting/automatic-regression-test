import { Selector } from 'testcafe'; // first import testcafe selectors

 exports.filterSelectorByAttribute = function(selectorInitializer, attrName, attrValue = null) {
    return Selector(selectorInitializer).filter((node, idx) => {
      if (!node.hasAttribute(attrName)) {
        return false;
      }
  
      if (attrValue === void 0 || attrValue === null) {
        return true;
      }
  
      const attr = node.getAttribute(attrName);
  
      if (attrValue.test && attrValue.exec && (attrValue.ignoreCase || attrValue.ignoreCase === false)) {
        return attrValue.test(attr);
      }
      else {
        return (attr === (attrValue + ''));
      }
    }, { attrName, attrValue });
  };