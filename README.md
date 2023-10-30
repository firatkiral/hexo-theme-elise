# Elise

![elise](firatkiral.github.io/hexo-theme-elise/images/elise.png)

[![NPM version](https://badge.fury.io/js/hexo-theme-landscape.svg)](https://www.npmjs.com/package/hexo-theme-elise)

Elise theme for [Hexo].

- [Preview](firatkiral.github.io/hexo-theme-elise/)

## Installation

### Install

Local git install:

``` bash
$ git clone --depth 1 https://github.com/firatkiral/hexo-theme-elise themes/elise
```

npm install:

```
npm i hexo-theme-elise
```

### Enable

Modify `theme` setting in `_config.yml` to `elise`.

``` diff
_config.yml
- theme: landscape
+ theme: elise
```

### Update

``` bash
cd themes/elise
git pull
```

## Configuration

It is recommended not to modify `theme/elise/_config.yml` but to use the `theme_config` section of `_config.yml` or to create `_config.elise.yml` (see [Alternate Theme Config](https://hexo.io/docs/configuration#Alternate-Theme-Config)).

``` yml
# Site
favicon: "/favicon.ico"
logo: "/logo.png"

# Carousel settings
carousel:
  enable: true
  autoplay: true
  interval: 5000
  slides: [https://source.unsplash.com/random, https://source.unsplash.com/random, https://source.unsplash.com/random, https://source.unsplash.com/random]
  height: 300px

# Call to action settings
call_to_action:
  enable: true
  text: "Elise theme"
  button_text: "Get Started"
  link: "" # Add link here

sidebar:
  enable: true
  image: "https://source.unsplash.com/random"
  header: "About Us"
  text: "Elise is a free responsive theme for Hexo. It is based on Bootstrap 5 and it is built to be easy to use and beautiful to look at."
  social:
    facebook: "/"
    tiktok: "/"
    twitter: "/"
    instagram: "/"
    linkedin: "/"
    youtube: "/"
    pinterest: "/"
    github: "/"
    email: "/"
  
# Menu
menu:
  PAGE 1: /page-1/
  PAGE 2: /page-2/
  PAGES: 
    SUB-PAGE 1: /subpage-1/
    SUB-PAGE 2: /subpage-2/
    SUB-PAGE 3: /subpage-3/

# Read More text
excerpt_link: READ MORE
```

- **favicon** - Favicon path
- **logo** - Path of logo image of website
- **carousel** - Sliding images on the homepage
- **call_to_action** - Call to action section on the homepage for redirecting visitors to a specific page
- **sidebar** - Sidebar style. You can add cover image, title, text image and social links here.
- **menu** - Navigation menu allowing multi-level menus.
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.

## Cover Image of Posts

You can simply add 'cover' property to the front-matter of your post.

``` yml
---
title: Hello World
date: 2021-01-01 00:00:00
cover: https://source.unsplash.com/random
---
```

Enjoy it!