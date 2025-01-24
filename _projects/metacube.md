---
layout: page
title: MetaCube
description: MetaAvatar/MetaSJTU, an online version of SJTU, powered with a series of algorithms like stylized face parameters / mocap / basic game features.
img: assets/img/stylizedface_demo_pic.png
importance: 2
category: 3D Generative Models
related_publications: false
---
MetaCube/MetaSJTU is a (series of) project(s) that I partipated at MetaCube Lab, SJTU. The primary goal is to build up **a digital model of our university** and integrate it into a simple multi-player online game, where **users can have their on featured avatars and interact with each other**. We explored a number of Proof-of-Concept machine learning techniques like motion capture, stylized face parameter estimation, ASR+TTS for agent talking, etc. In below I list a few things where I was the owner:

- Making an online version(model) of SJTU, develop game features with unity.
- Re-produce the pipeline of `AgileAvatar`, which estimates stylized face parameters from a single RGB image. 
- Deploy face blendshape estimation model, deploy llm+TTS+Audio2Face to talk with the agent.
- Implement the web-demo via vue and backend api via flask. 

First reproduce the paper [AgileAvatar](https://arxiv.org/abs/2211.07818), where we collect many real faces, avatar models and accessories models, randomly assemble the character and render to images with unity. The paired data are further used to train a StyleGANv2 model + MLP estimator. Here is a simple progress illustrating the training of the StyleGANv2. 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stylizedface_demo.gif" title="StyleGANV2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig.1 Process of training the StyleGANv2.
</div>

With the reproduced pipeline, I built up a flask service and web demo as follows, which supports uploading an image and estimate its stylized face parameter sets. The stylized face parameters are further used to assemble a model that "looks like" the input human face. Notice that it's **only a POC** and later we improve the art quality with better human models.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stylizedface_ui.mp4" title="StylizedFace Creator" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig.2 (POC): Reproduing AgileAvatar, a SOTA algorithm to estimate stylized face parameters from a single RGB image.
</div>

Here is a simple unity demo illustrating our MetaSJTU game. It's featured with basic game controls and syncing(with mirror), mocap with webcam(mediapipe) and retargeting to avatars, customized face creation. It's also only a proof-of-concept. 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/metasjtu_demo.mp4" title="MetaSJTU" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig.3 (POC): A simple online modeling and game version of SJTU, supporting basic mocap and game controls.
</div>