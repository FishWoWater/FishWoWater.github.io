---
title:  "Recent Methods On Multi-Person 3D Pose Estimation And Mesh Recovery"
search: true
categories:
  - Human Pose Estimation
  - Human Mesh Recovery
---

## Overview
In this post I am going to discuss about several recent paper on 3D human pose estimation and human mesh recovery / motion capture.  Estimating the poses and motions of multiple people simultanesly is a crucial to 3D understanding and may have valuable applications in AR / VR. ECCV20 holds 3DPW Challenge on mult-person 3D pose estimation, in which CenterHMR won the second place and MeTRAbs won the first place.

## Paper In Discussion
* XNect: Real-time Multi-Person 3D Motion Capture with a Single RGB Camera ([SIGGRAPH20](http://gvv.mpi-inf.mpg.de/projects/XNect/content/XNect_SIGGRAPH2020.pdf)) (extension of VNect,  XNect learn 2D heatmaps with 3D local embeddings in the first stage, decode into complete 3D skeletons in the second stage, fitting a skeletal model and output joint angles in the third stage. Contributions: **network arch in the first stage**; **encode 3D hints locally and decode later**. Fast compared with RootNet but the performance is not as good as RootNet)
* MeTRAbs Absolute 3D Human Pose Estimator([IEEE Transactions](https://github.com/isarandi/metrabs)) (1st plane in 3DPW Challenge) (inspring work,  predict metric-space 3D heatamps from images(combine with benefits of lfiting methods and CNN methods while avoid their drawbacks, e.g. do not need post-processing from bone length prior,  able to exploit CNN structure), propose alignment layer to use in-the-wild 2D, address truncation problem(CNN encode positions by paddings), allow absolute supervision given calibrated camera,  giving accurate absolute 3D pose estimation. )
* Monocular 3D pose and shape estimation of multiple people in natural scenes-the importance of multiple scene constraints([CVPR18]) (use collision loss,  fit ground plane using 3D ankle positions as constraints.  Invovle iterative fitting Skeletal model to 3D estimations)
* CenterHMR:Multi-Person Center-based Human Mesh Recover([eccv20](https://github.com/Arthur151/CenterHMR)) (bottom up method, predict center maps, using which camera and SMPL params are sampled. 2nd place in 3DPW Challenge)
* CRMH: Coherent Reconstruction of Multiple Humans from a Single Image ([CVPR20](https://arxiv.org/pdf/2006.08586.pdf)) (combine faster-rcnn with SMPL, use instance segmentation to provide a depth-order-aware loss & collision loss,  performance is not as good as CenterHMR)

## XNect

## MeTRAbs

## Monocular 3D pose and shape estimation of multiple people in natural scenes-the importance of multiple scene constraints

## CenterHMR

## CRWH
