<script>
  {% for line in checkout.line_items %}
    // DEBUG looking at {{ line.title }}
    {% if line.title == 'Download Product' %}
      Shopify.Checkout.OrderStatus.addContentBox(
        '<h2>Download Your Products</h2>', '<p><a href="https://neuropathy-reversal-solution.myshopify.com/pages/abc" target="_blank">Click Here</a> to download assets.</p>'
      )
    {% endif %}
  {% endfor %}
</script>
<script>
var delayInMilliseconds = 1000; //1 second
setTimeout(function() {
const el = document.getElementsByClassName('content-box')[1];
var parenta =  document.querySelector("#partial-icon-symbols");
  //your code to be executed after 1 second
parenta.insertBefore(el, parenta.firstChild);
}, delayInMilliseconds);
</script>
<style>#partial-icon-symbols{display: block;margin: 20px 0;}#partial-icon-symbols svg{display:none;}.order-summary__sections{height: auto;}</style>
