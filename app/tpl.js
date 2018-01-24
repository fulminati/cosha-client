angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/comp/analysis/analysis.html','\n<div class="card">\n    <div class="card-content padding-8px">\n        <div class="analysis-style overflow-y-scroll layout-under-mainboard-height">\n            <pre id="analysis"></pre>\n        </div>\n    </div>\n</div>\n');
$templateCache.put('app/comp/databases/databases.html','\n<div class="card">\n    <div class="card-content padding-8px layout-full-height">\n\n        <div class="field margin-bottom-8px">\n            <p class="control has-icons-left">\n                <span class="select width-100pc">\n                    <select\n                        class="width-100pc"\n                        ng-model="$root.database"\n                        ng-options="k as v.source for (k, v) in $root.config.databases"\n                        ng-change="$root.loadDatabase()"\n                        >\n                    </select>\n                </span>\n                <span class="icon is-small is-left">\n                    <i class="fa fa-book"></i>\n                </span>\n            </p>\n        </div>\n\n        <div class="overflow-x-hidden overflow-y-scroll layout-inner-panel-height">\n            <div class="columns is-multiline margin-right-8px">\n                <div\n                    class="column"\n                    ng-click="$ctrl.selectRecord(record)"\n                    ng-repeat="record in $root.databaseRecords"\n                    >\n                    <miniboard fen="record.fen"/>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>');
$templateCache.put('app/comp/home/home.html','\n\n<div class="has-text-centered margin-bottom-2px">\n\n    <div class="is-inline-block margin-bottom-8px">\n        <div class="buttons has-addons">\n            <span class="button">One</span>\n            <span class="button">Two</span>\n        </div>\n    </div>&nbsp;\n\n    <div class="is-inline-block margin-bottom-8px">\n        <div class="buttons has-addons">\n            <span class="button">One</span>\n            <span class="button">Two</span>\n            <span class="button">Three</span>\n            <span class="button">Four</span>\n        </div>\n    </div>&nbsp;\n\n    <div class="is-inline-block margin-bottom-8px">\n        <div class="buttons has-addons">\n            <span class="button">Three</span>\n            <span class="button">Four</span>\n        </div>\n    </div>&nbsp;\n\n    <div class="is-inline-block margin-bottom-8px">\n        <div class="buttons has-addons">\n            <span class="button">\n                <i class="fa fa-sort-alpha-asc"></i>\n            </span>\n            <span class="button">\n                <i class="fa fa-sort-alpha-desc"></i>\n            </span>\n        </div>\n    </div>\n\n</div>\n\n<div class="columns is-multiline is-desktop">\n    <div class="column is-one-third" ng-repeat="device in $root.devices">\n        <div class="card">\n            <div class="card-header">\n                <p class="card-header-title">\n                    {{ device.id }}\n                </p>\n                <a href="#" class="card-header-icon" aria-label="more options">\n                    <span class="icon">\n                        <i class="fa fa-gear" aria-hidden="true"></i>\n                    </span>\n                </a>\n            </div>\n            <div class="card-content">\n                <div ng-repeat="token in device.rw" class="margin-bottom-8px">\n                    {{ token }}\n\n                    <div class="field pull-right" style="width:48px">\n                        <input\n                            id="switchExample"\n                            type="checkbox"\n                            name="switchExample"\n                            class="switch is-success"\n                            checked="checked"\n                            />\n                        <label for="switchExample"></label>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n');
$templateCache.put('app/comp/mainboard/mainboard.html','\n<div class="card margin-bottom-8px">\n    <div class="card-content no-padding">\n        <div id="mainboard" class=""></div>\n    </div>\n</div>\n');
$templateCache.put('app/comp/layout/layout.html','\n<!--navbar/-->\n\n<section class="section">\n    <div class="container is-fluid">\n        <div ui-view />\n    </div>\n</section>\n\n');
$templateCache.put('app/comp/miniboard/miniboard.html','\n<div id="{{ $ctrl.id }}" style="max-width: 132px; width: 132px">\n</div>\n\n');
$templateCache.put('app/comp/navbar/navbar.html','<nav class="navbar is-dark">\n    <div class="navbar-brand">\n        <strong class="navbar-item">\n            <i class="fa fa-thermometer-full" aria-hidden="true"></i>\n            &nbsp; Chessfix\n        </strong>\n        <div class="navbar-burger burger" data-target="navMenuColordark-example">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n    </div>\n\n    <div class="navbar-menu">\n        <div class="navbar-start">\n            <div class="navbar-item no-padding-left">\n                <div class="field is-grouped">\n\n                    <p class="control">\n                        <a class="button is-light" ng-click="$root.process();">\n                            <span class="icon">\n                                <i class="fa fa-refresh"></i>\n                            </span>\n                            <span>Process/Refresh [F5]</span>\n                        </a>\n                    </p>\n\n                </div>\n            </div>\n        </div>\n\n        <div class="navbar-end">\n            <div class="navbar-item">\n                <div class="field is-grouped">\n                    <p class="control">\n                        <a class="button is-warning is-rounded" target="_blank" href="https://github.com/krudochess/chessfix">\n                            <span class="icon">\n                                <i class="fa fa-github"></i>\n                            </span>\n                            <span>Chessfix on GitHub</span>\n                        </a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</nav>\n\n\n\n\n');
$templateCache.put('app/comp/output/output.html','\n<div class="output-style layout-inner-panel-height">\n    <pre id="output"></pre>\n</div>\n');
$templateCache.put('app/comp/utilities/utilities.html','<div class="card">\n    <div class="card-content padding-8px layout-full-height">\n\n        <div class="field margin-bottom-8px">\n            <p class="control has-icons-left">\n                <span class="select width-100pc">\n                    <select\n                        class="width-100pc"\n                        ng-model="$root.utility"\n                        ng-options="k as k for (k, v) in $root.config.utilities"\n                        ng-change="$root.process()"\n                        >\n                    </select>\n                </span>\n                <span class="icon is-small is-left">\n                    <i class="fa fa-wrench"></i>\n                </span>\n            </p>\n        </div>\n\n        <output/>\n\n    </div>\n</div>');}]);