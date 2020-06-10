/**
 * Gets the inject script filled with the given params.
 * @param companyName: name of the company
 * @param bgColor: background color
 * @param textColor: text color
 * @param scriptUrl
 */
export const getInjectScript = (
  companyName: string,
  bgColor: string,
  textColor: string,
  scriptUrl: string,
): string => {
  return `<script>
    (function(b,l,a,c,k){var e=b.BLM=b.BLM||[];e.initialized?b.console&&console.error&&console.error("BLM snippet already called")
    :(e.initialized=!0,e.load=function(o){var r=l.createElement(a);r.type="text/javascript",r.src=c;
    var t=l.getElementsByTagName(a)[0];t.parentNode.insertBefore(r,t),e._loadOptions=o},
    e.load({ name: "${companyName}", primaryColor: "${textColor}", backgroundColor: "${bgColor}" }))
    })(window, document, "script", "${scriptUrl}");
</script>`;
};

/**
 * Grab the any attribute for the <script> tag used to inject this
 */
export const getScriptAttribute = (attr: string): string | null => {
  const scripts = document.getElementsByTagName('script');
  return scripts[scripts.length - 1]?.getAttribute(attr);
};
