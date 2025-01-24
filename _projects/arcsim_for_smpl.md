---
layout: page
title: ARCSim-for-SMPL
description: I made ARCSim(a cloth simulation engine) compatibile with SMPL, supporting SMPL shape / pose interpolation, cloth & SMPL body physics.
img: assets/img/arcsim_demo_pic.png
importance: 3
category: Virtual Try On
related_publications: false
---

Github link: https://github.com/FishWoWater/ARCSim-For-SMPL

ARCSim is an open source simulation engine for virtual try-on. [ARCSim-HYLC](https://git.ista.ac.at/gsperl/ARCSim-HYLC) is a fork of ARCSim to support more advanced cloth materials. But NEITHER of them natively suport SMPL (parametric human model). So I made a fork and add compatibility for ARCSim. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/trellis_blender_videodemo.gif" title="ARCSim Demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig.1 Demo.
</div>