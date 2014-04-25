/**
 * @copyright
 */
jQuery.sap.declare("sap.m.FacetFilterRenderer");sap.m.FacetFilterRenderer={};
sap.m.FacetFilterRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<div");r.writeControlData(c);r.addClass("sapMFF");if(c._lastScrolling){r.addClass("sapMFFScrolling")}else{r.addClass("sapMFFNoScrolling")}r.writeClasses();r.write(">");var f=c._getType();switch(f){case sap.m.FacetFilterType.Simple:sap.m.FacetFilterRenderer.renderSimpleFlow(r,c);break;case sap.m.FacetFilterType.Light:sap.m.FacetFilterRenderer.renderLightFlow(r,c);break}r.write("</div>")};
sap.m.FacetFilterRenderer.renderLightFlow=function(r,c){c._summaryBar.setActive(true);sap.m.FacetFilterRenderer.renderSummaryBar(r,c)};
sap.m.FacetFilterRenderer.renderSimpleFlow=function(r,c){if(!c._getShowSummaryBar()){if(jQuery.device.is.desktop){r.renderControl(c._getScrollingArrow("left"))}r.write("<div id='"+c.getId()+"-head'");r.writeControlData(c);r.addClass("sapMFFHead");r.writeClasses();r.write(">");sap.m.FacetFilterRenderer.renderItems(r,c);if(c.getShowPersonalization()){sap.m.FacetFilterRenderer.renderPersonalization(r,c)}r.write("</div>");if(jQuery.device.is.desktop){r.renderControl(c._getScrollingArrow("right"))}r.write("<span");r.addClass("sapMFFResetIcon");r.writeClasses();r.write(">");r.renderControl(c._resetIcon.setVisible(c.getShowReset()));r.write("</span>")}else{sap.m.FacetFilterRenderer.renderSummaryBar(r,c)}};
sap.m.FacetFilterRenderer.renderItems=function(r,c){var l=c.getLists();var A=sap.m.FacetFilterRenderer.setSequenceOnItems(l);if(A.length>1){A.sort(function(a,b){return a.getSequence()>b.getSequence()})}for(var i=0;i<A.length;i++){var f=A[i];f._getFacetButton().setText(f._getSelectionText());r.renderControl(f._getFacetButton())}};
sap.m.FacetFilterRenderer.renderPersonalization=function(r,c){r.renderControl(c._facetAddIcon)};
sap.m.FacetFilterRenderer.renderSummaryBar=function(r,c){c._summaryBar.getContent()[0].setText(c.getSummaryText());c._resetIcon.setVisible(c.getShowReset());r.write("<div");r.writeAttribute("id",c.getId()+"-summaryBarDiv");r.addClass("sapMTB-Info-CTX");r.writeClasses();r.write(">");r.renderControl(c._summaryBar);r.write("</div>")};
sap.m.FacetFilterRenderer.setSequenceOnItems=function(l){var m=-1;var a=[];if(l){for(var i=0;i<l.length;i++){if(!l[i].getActive()){l[i].setSequence(-1)}else{if(l[i].getSequence()>m){m=l[i].getSequence()}a.push(l[i])}}for(var j=0;j<a.length;j++){if(a[j].getSequence()==-1){m=m+1;a[j].setSequence(m)}}}return a};
