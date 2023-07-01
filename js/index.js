import { CARviewer} from './MKViewer.js';
import * as THREE from './THREE/three.module.js';
import { TWEEN } from './THREE/tween.module.min.js';
function _(elm){return document.getElementById(elm)}
let Viewer = new CARviewer(_("CarViewer"))
Viewer.initScene()
Viewer.animate()
Viewer.render = function() {
    TWEEN.update()
    Viewer.renderer.render(Viewer.scene, Viewer.camera);
  }
  let close = true
  _("play").addEventListener("click", function(){
    var TOPmat = Viewer.scene.getObjectByName("TOP-mat", true);
    var TOPtra = Viewer.scene.getObjectByName("TOP-tra", true);
    var initialRotationTOPmat = TOPmat.rotation.clone();
    var initialRotationTOPtra = TOPmat.rotation.clone();

    if (close) {
    
        new TWEEN.Tween(TOPmat.rotation)
            .to({z:TOPmat.rotation.z+ Math.PI / 2 } , 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function(){})
            .onComplete(function(){ close = false;_("play").innerHTML = "CLOSE"; })
            .start();
    
        new TWEEN.Tween(TOPtra.rotation)
            .to({z:TOPtra.rotation.z+ Math.PI / 2 }, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function(){})
            .onComplete(function(){ close = false;_("play").innerHTML = "CLOSE"; })
            .start();
    } else {

        new TWEEN.Tween(TOPmat.rotation)
        .to({z:TOPmat.rotation.z- Math.PI / 2 } , 1000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function(){})
        .onComplete(function(){ close = true;_("play").innerHTML = "OPEN"; })
        .start();

    new TWEEN.Tween(TOPtra.rotation)
        .to({z:TOPtra.rotation.z- Math.PI / 2 }, 1000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function(){})
        .onComplete(function(){ close = true;_("play").innerHTML = "OPEN"; })
        .start();
    }
    
});





