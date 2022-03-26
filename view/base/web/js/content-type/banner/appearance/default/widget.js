/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'Magepow_PageBuilderFilter/js/widget/show-on-hover',
    'Magepow_PageBuilderFilter/js/widget/video-background'
], function (showOnHover, videoBackground) {
    'use strict';

    return function (config, element) {
        var videoElement = element[0].querySelector('[data-background-type=video]');

        showOnHover(config);

        if (videoElement) {
            videoBackground(config, videoElement);
        }
    };
});
