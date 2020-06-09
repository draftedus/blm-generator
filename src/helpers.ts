/**
 * Gets the inject script filled with the given params.
 * @param companyName: name of the company
 * @param bgColor: background color
 * @param textColor: text color
 */
export const getInjectScript = (
  companyName: string,
  bgColor: string,
  textColor: string
): string => {
  return `<script>
    !function(){var e=window.BLM=window.BLM||[];e.initialized?window.console&&console.error&&console.error("BLM snippet already called")
    :(e.initialized=!0,e.load=function(o){var r=document.createElement("script");r.type="text/javascript",r.src="//blmtech.s3.amazonaws.com/blm.min.js";
    var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(r,t),e._loadOptions=o},
    e.load({ name: "${companyName}", primaryColor: "${textColor}", backgroundColor: "${bgColor}" }))
    }();
</script>`;
};
