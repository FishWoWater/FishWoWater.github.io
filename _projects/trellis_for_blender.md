---
layout: page
title: TreLLIS for Blender
description: Blender Plugin for TreLLIS
img: assets/img/trellis_blender_pic1.png
importance: 1
category: 3D Generative Models
related_publications: false
---

A Blender addon that integrates [TRELLIS](https://github.com/microsoft/TRELLIS)'s 3D generation capabilities into blender. [TRELLIS](https://github.com/microsoft/TRELLIS) is SOTA text-to-3d(unreleased) and image-to-3d AIGC model.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/trellis_blender_videodemo.gif" title="Image-to-3D Generation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Select an image, upload to server, processing, download and import.
</div>

---
## Core Features
### Image-to-3D
1. Access the panel (open 3d viewport and press n to open sidebar), find TRELLIS.
2. Select an image as input. 
3. Adjust generation parameters (*empirically can use fewer steps*)
4. Click `Image to 3D`. 
5. The plugin uploads the image to API backend. 
6. When finished, the model url can be downloaded and imported into the scene.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/trellis_blender_pic1.png" title="Image-to-3D Generation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Image-to-3D.
</div>

### Image-Conditioned Detail Variation
> can be used to synthesize texture for an existing 3D model in the scene 
1. Access the panel (open 3d viewport and press n to open sidebar), find TRELLIS.
2. Select an object in the scene, select an image as conditional input. 
3. Adjust generation parameters (*empirically can use fewer steps*)
4. The plugin will upload both the object and the image to the API backend. 
5. When finished, the model url can be downloaded and imported into the scene (*with geometry unchanged and new texture*)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/trellis_blender_pic2.png" title="Image-Conditioned Detail Variation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Image-Conditioned Detail Variation.
</div>

## Installation

### Requirements
- Blender 3.6.0 or higher
- Running TRELLIS API server (Refer to [my TreLLIS fork](https://github.com/FishWoWater/TRELLIS/blob/dev/README_api.md))

### Steps
1. Download the plugin files (clone this repo)
2. In Blender, go to Edit > Preferences > Add-ons
3. Click "Install" and select the `trellis_for_blender.py` file
4. Enable the addon by checking the box next to "3D View: TRELLIS"

## Generation Parameters

- **Sparse Structure Settings**
  - Sample Steps (sampling steps for structure diffusion, by default 12)
  - CFG Strength (classifier-free-guidance, by default 7.5, higher value will better align the input image)
- **Structured Latent Settings**
  - Sample Steps (sampling steps for SLAT diffusion, by default 12)
  - CFG Strength (classifier-free-guidance, by default 7.5, higher value will better align the input image)
- **Postprocessing Mesh Options**
  - Simplify Ratio (# of triangles to remove, by default 0.95)
  - Texture Size (by default 1024, can set to 2048 for higher quality, but slower)
  - Texture Bake Mode ('fast' or 'opt', 'opt' can be slow but has higher quality)

