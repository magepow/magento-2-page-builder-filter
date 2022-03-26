/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'slick': 'Magepow_PageBuilderFilter/js/resource/slick/slick',
            'jarallax': 'Magepow_PageBuilderFilter/js/resource/jarallax/jarallax',
            'jarallaxVideo': 'Magepow_PageBuilderFilter/js/resource/jarallax/jarallax-video',
            'vimeo': 'Magepow_PageBuilderFilter/js/resource/vimeo/player',
            'vimeoWrapper': 'Magepow_PageBuilderFilter/js/resource/vimeo/vimeo-wrapper'
        }
    },
    shim: {
        'Magepow_PageBuilderFilter/js/resource/slick/slick': {
            deps: ['jquery']
        },
        'Magepow_PageBuilderFilter/js/resource/jarallax/jarallax-video': {
            deps: ['jarallax', 'vimeoWrapper']
        },
        'Magepow_PageBuilderFilter/js/resource/vimeo/player': {
            exports: ['Player']
        }
    }
};
