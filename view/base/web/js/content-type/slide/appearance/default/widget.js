/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
define([
    'jquery',
    'underscore',
    'Magepow_PageBuilderFilter/js/widget/show-on-hover',
    'Magepow_PageBuilderFilter/js/widget/video-background'
], function ($, _, showOnHover, videoBackground) {
    'use strict';

    return function (config, element) {
        var videoElement = element[0].querySelector('[data-background-type=video]'),
            viewportElement = document.createElement('div'),
            $slider = null;

        showOnHover(config);

        if (videoElement) {
            $slider = $(element).closest('[data-content-type=slider]');
            viewportElement.classList.add('jarallax-viewport-element');
            videoElement.setAttribute('data-element-in-viewport', '.jarallax-viewport-element');
            videoElement.appendChild(viewportElement);
            videoBackground(config, videoElement);

            if ($slider.data('afterChangeIsSet')) {
                return;
            }

            $slider.on('afterChange init', function () {
                var videoSlides = $slider[0].querySelectorAll('.jarallax');

                _.each(videoSlides, function (videoSlide) {
                    videoSlide.jarallax && videoSlide.jarallax.onScroll();
                });
            });
            $slider.data('afterChangeIsSet', true);
        }
    };
});
