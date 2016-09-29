// directive
import Vue from 'vue'
Vue.directive('effect', {
    bind: function() {
        var el = this.el
        el.classList.add('waves-effect')
        this.expression && el.classList.add('waves-' + this.expression)
        function convertStyle(obj) {
            var style = '';
            for (var a in obj) {
                if (obj.hasOwnProperty(a)) {
                    style += (a + ':' + obj[a] + ';');
                }
            }
            return style;
        }
        this.handler = function(e) {
            var ripple = document.createElement('div');
            ripple.classList.add('waves-ripple');
            el.appendChild(ripple);
            var styles = {
                'left': e.layerX + 'px',
                'top': e.layerY + 'px',
                'opacity': 1,
                'transform': 'scale(' + ((el.clientWidth / 100) * 10) + ')',
                'transition-duration': '750ms',
                'transition-timing-function': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
            };
            ripple.setAttribute('style', convertStyle(styles));
            setTimeout(function() {
                ripple.setAttribute('style', convertStyle({
                    'opacity': 0,
                    'transform': styles.transform,
                    'left': styles.left,
                    'top': styles.top
                }));
                setTimeout(function() {
                    ripple && el.removeChild(ripple);
                }, 750);
                // 
            }, 450);
        }
        this.el.addEventListener('mousedown', this.handler, false)
    },
    unbind: function() {
        this.el.removeEventListener('mousedown', this.handler)
    }
})