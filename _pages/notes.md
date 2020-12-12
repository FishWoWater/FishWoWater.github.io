---
permalink: /notes/
title: "Notes"
layouts_gallery:
  - url: /assets/images/mm-layout-splash.png
    image_path: /assets/images/mm-layout-splash.png
    alt: "splash layout example"
  - url: /assets/images/mm-layout-single-meta.png
    image_path: /assets/images/mm-layout-single-meta.png
    alt: "single layout with comments and related posts"
  - url: /assets/images/mm-layout-archive.png
    image_path: /assets/images/mm-layout-archive.png
    alt: "archive layout example"
toc: true
---

## 2020-12

* human pose
    * [ ] Inference Stage Optimization for Cross-scenario 3D Human Pose Estimation ([Arxiv](https://arxiv.org/abs/2007.02054)))
    * [x] View-Invariant Probabilistic Embedding for Human Pose ([eccv20](http://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123500052.pdf)) ([code](https://github.com/google-research/google-research/tree/master/poem)) (POEM, learn probabilitic embedding of 2D poses via triplet loss(positive pair defined by 3D distance ) may be used in downstream tasks like pose-based image retrieval, video alignment)
    * [x] Multi-Scale Networks for 3D Human Pose Estimation with Inference Stage Optimization ([Arxiv](https://arxiv.org/abs/2010.06844)) (FSL + SSL,  fully supervised during training and perform inference stage optimization(loop closure + adv like CVPR'19)

* human mesh recovery
    * [x] CAPE: Clothed Auto-Person Encoding ([CVPR20](https://openaccess.thecvf.com/content_CVPR_2020/papers/Ma_Learning_to_Dress_3D_People_in_Generative_Clothing_CVPR_2020_paper.pdf)) ([code](https://github.com/QianliM/CAPE)) (add terms in blending shape, which are conditioned on pose, cloth type, and cloth latent representation, learn auto-encoder from displacement )
    * [x] XNect: Real-time Multi-Person 3D Motion Capture with a Single RGB Camera ([SIGGRAPH20](http://gvv.mpi-inf.mpg.de/projects/XNect/content/XNect_SIGGRAPH2020.pdf)) (extension of VNect,  XNect learn 2D heatmaps with 3D local embeddings in the first stage, decode into complete 3D skeletons in the second stage, fitting a skeletal model and output joint angles in the third stage. Contributions: **network arch in the first stage**; **encode 3D hints locally and decode later**. Fast compared with RootNet but the performance is not as good as RootNet)
    * [x] Pose2Mesh: Graph Convolutional Network for 3D Human Pose and Mesh Recovery from a 2D Human Pose ([ECCV20](https://arxiv.org/pdf/2008.09047.pdf)) ([code](https://github.com/hongsukchoi/Pose2Mesh_RELEASE)) (use graph convolution network to learn mesh deformation from 2D pose. supervised work.)

*  Human Characters
    * [x] Skeleton-Aware Networks for Deep Motion Retargeting ([SIGGRAPH20](https://arxiv.org/abs/2005.05732)) ([code](https://github.com/DeepMotionEditing/deep-motion-editing)) ([project](https://www.youtube.com/watch?v=ym8Tnmiz5N8))(on **retargeting**, **inspiring work**, disentangle skeleton representation into static component and motion component, allow intra-structure motion transfer and cross-structure motion transfer,  utilize adversarial training)
    * [ ] Unpaired Motion Style Transfer from Video to Animation ([SIGGRAPH20](https://deepmotionediting.github.io/style_transfer)) ([code](https://github.com/DeepMotionEditing/deep-motion-editing)) (Application for skeleton-aware task)
    * [x] Predicting Animation Skeletons for 3D Articulated Models via Volumetric Nets ([3DV19](https://arxiv.org/abs/1908.08506))([code](https://github.com/zhan-xu/AnimSkelVolNet)) (use voxel representation, predict heatmaps for joints and bones and then construct a minimum spanning tree.   Use SDF and LSD as input representations to encode human priors. )
    * [x] RigNet: Neural Rigging for Articulated Characters ([SIGGRAPH20](https://people.cs.umass.edu/~zhanxu/papers/RigNet.pdf))([code](https://people.cs.umass.edu/~zhanxu/papers/RigNet.pdf)) (extension of work above,  first detect keypoints via attention and clustering. then use MST algorithm to consturct minimum spanning stree and learn skinning weights. Allow control of level of details in learned riggs.)

## 2020-11
Work hard for CVPR 2021 and submit 2 papers on human pose estimation, mesh recovery respectively.

## 2020-8
Meet my lovely girl. Days with happiness.

## 2020-7
Begin my internship at Guangjian Technology on anti-spoofing.

## 2020-6
A very busy month with course projects and exams.


## 2020-3
Work hard for NIPS.
Preparing supplementary material for ECCV.

* 3D Mesh Reconstruction from image
    * [X] HoloPose: Holistic 3D Human Reconstruction In-The-Wild ([CVPR19](http://openaccess.thecvf.com/content_CVPR_2019/papers/Guler_HoloPose_Holistic_3D_Human_Reconstruction_In-The-Wild_CVPR_2019_paper.pdf))([proj](https://www.arielai.com/holopose/))
    * [X] Soft Rasterizer: A Differentiable Renderer for Image-based 3D Reasoning ([CVPR19](https://arxiv.org/abs/1904.01786))([code](https://github.com/ShichenLiu/SoftRas))
* 3D Mesh Reconstruction from video
    * [x] Expressive Body Capture: 3D Hands, Face, and Body from a Single Image ([CVPR19](https://arxiv.org/pdf/1904.05866.pdf))([proj](https://smpl-x.is.tue.mpg.de/))
    * [ ] Exploiting temporal context for 3D human pose estimation in the wild ([CVPR19](https://arxiv.org/pdf/1905.04266.pdf))([code](https://github.com/deepmind/Temporal-3D-Pose-Kinetics))
    * [X] VIBE: Video Inference for Human Body Pose and Shape Estimation ([arXiv](https://arxiv.org/pdf/1912.05656v1.pdf))([code](https://github.com/mkocabas/VIBE))
    * [X] HEMlets PoSh: Learning Part-Centric Heatmap Triplets for 3D Human Pose and Shape Estimation ([ICCV19](https://arxiv.org/pdf/2003.04894.pdf))
* Unsupervised 3D Mesh Reconstruction
    * [X] PoseNet3D: Unsupervised 3D Human Shape and Pose Estimation ([arXiv](https://arxiv.org/abs/2003.03473))
    * [X] Self-supervised Learning of Motion Capture([NIPS17](https://arxiv.org/abs/1712.01337))([code](https://github.com/htung0101/3d_smpl))
    * [X] TexturePose: Supervising Human Mesh Estimation with Texture Consistency ([ICCV19](https://arxiv.org/pdf/1910.11322.pdf)) ([code](https://github.com/geopavlakos/TexturePose))
    * [X] Learning to Reconstruct 3D Human Pose and Shape via Model-fitting in the Loop ([ICCV19](https://arxiv.org/pdf/1909.12828.pdf)) ([code](https://seas.upenn.edu/~nkolot/projects/spin))
* 3D reconstrunction
    * [X] On the Continuity of Rotation Representations in Neural Networks ([CVPR19](https://arxiv.org/abs/1812.07035))
    * [ ] Learning to Estimate 3D Human Pose and Shape from a Single Color Image ([CVPR18](https://arxiv.org/abs/1805.04092))
    * [ ] Learning to Predict 3D Objects with an Interpolation-based Differentiable Renderer ([NIPS19](https://arxiv.org/abs/1908.01210))([code](https://nv-tlabs.github.io/DIB-R/))
    * [x] Soft Rasterizer: A Differentiable Renderer for Image-based 3D Reasoning ([CVPR19](https://arxiv.org/abs/1904.01786))([code](https://github.com/ShichenLiu/SoftRas))
    * [x] VIBE: Video Inference for Human Body Pose and Shape Estimation ([arXiv](https://arxiv.org/pdf/1912.05656v1.pdf))([code](https://github.com/mkocabas/VIBE))
    * [x] Neural 3D Mesh Renderer ([CVPR18](https://arxiv.org/abs/1711.07566))([code](https://github.com/hiroharu-kato/neural_renderer))
    * [x] learning 3d human dynamics from video ([CVPR19](https://arxiv.org/abs/1812.01601))([code](https://akanazawa.github.io/human_dynamics/))
    * [x] Keep it SMPL: Automatic Estimation of 3D Human Pose and Shape from a Single Image ([ECCV16](https://arxiv.org/abs/1607.08128)) 

## 2020-1
Work hard for eccv. Our work on unsupervised human pose estimation.

* 3D Mesh Reconstruction
    * [x] Self-supervised Learning of Motion Capture([NIPS17](http://papers.nips.cc/paper/7108-self-supervised-learning-of-motion-capture.pdf))([code](https://github.com/htung0101/3d_smpl))
    * [x] VIBE: Video Inference for Human Body Pose and Shape Estimation ([arXiv](https://arxiv.org/pdf/1912.05656v1.pdf))([code](https://github.com/mkocabas/VIBE))
* Unsupervised
    * [x] Object landmark discovery through unsupervised adaptation ([NIPS19](https://papers.nips.cc/paper/9505-object-landmark-discovery-through-unsupervised-adaptation.pdf))([code](https://github.com/ESanchezLozano/SAIC-Unsupervised-landmark-detection-NeurIPS2019))

* 3D Pose Estimation
    * [X] On Boosting Single-Frame 3D Human Pose Estimation via Monocular Videos ([iccv19](http://openaccess.thecvf.com/content_ICCV_2019/papers/Li_On_Boosting_Single-Frame_3D_Human_Pose_Estimation_via_Monocular_Videos_ICCV_2019_paper.pdf))
    * [x] XNect: Real-time Multi-person 3D Human Pose Estimation with a Single RGB Camera ([arXiv](https://arxiv.org/abs/1907.00837))
    * [x] RepNet: Weakly Supervised Training of an Adversarial Reprojection Network for 3D Human Pose Estimation([CVPR19](http://openaccess.thecvf.com/content_CVPR_2019/papers/Wandt_RepNet_Weakly_Supervised_Training_of_an_Adversarial_Reprojection_Network_for_CVPR_2019_paper.pdf))([code](https://github.com/bastianwandt/RepNet))
    * [x] Bottom-up Higher-Resolution Networks for Multi-Person Pose Estimation ([arXiv](https://arxiv.org/abs/1908.10357))([code](https://github.com/HRNet/Higher-HRNet-Human-Pose-Estimation))
    * [x] The Devil is in the Details: Delving into Unbiased Data Processing for Human Pose Estimation ([arXiv](https://arxiv.org/abs/1911.07524))([zhihu](https://zhuanlan.zhihu.com/p/92525039))
    * [x] MaskedFusion: Mask-based 6D Object Pose Detection ([arXiv](https://arxiv.org/abs/1911.07771))([code](https://github.com/kroglice/MaskedFusion))   


## 2019-12
A very busy month for preparing papers and final exams. Re-imiplement the baseline in "Unsupervised 3D Pose Estimation with Geometric Self-Supervision"

* pytorch acceleration
    * [x] dali ([install guide](https://docs.nvidia.com/deeplearning/sdk/dali-developer-guide/docs/installation.html))([code](https://github.com/NVIDIA/DALI))
    * [x] apex ([offical guide](https://nvidia.github.io/apex/index.html))([tutorial](https://chenyue.top/2019/05/21/%E5%B7%A5%E7%A8%8B-%E4%BA%94-apex%E6%B7%B7%E5%90%88%E7%B2%BE%E5%BA%A6%E5%8A%A0%E9%80%9F/))



## 2019-11
Main focus: preparing for ICML and ECCV.


* Unsupervised 3D Pose Estimation
    * [X] Weakly-Supervised Discovery of Geometry-Aware Representation for 3D Human Pose Estimation ([CVPR'19](http://openaccess.thecvf.com/content_CVPR_2019/papers/Chen_Weakly-Supervised_Discovery_of_Geometry-Aware_Representation_for_3D_Human_Pose_Estimation_CVPR_2019_paper.pdf))
    * [X] Unsupervised Keypoint Learning for Guiding Class-Conditional Video Prediction ([NIPS19](https://openreview.net/pdf?id=rkl-dNHl8B))
    * [X] Discovery of Latent 3D Keypoints via End-to-end Geometric Reasoning ([NIPS18](https://arxiv.org/abs/1807.03146))
    * [X] Domes to Drones: Self-Supervised Active Triangulation for 3D Human Pose Reconstruction([NIPS19](http://papers.nips.cc/paper/8646-domes-to-drones-self-supervised-active-triangulation-for-3d-human-pose-reconstruction.pdf))
    * [X] Unsupervised 3D Pose Estimation with Geometric Self-Supervision
* Graph
    * [X] Co-occurrence Feature Learning from Skeleton Data for Action Recognition and Detection with Hierarchical Aggregation([IJCAI18](https://arxiv.org/abs/1804.06055))
    * [X] Spatial Temporal Graph Convolutional Networks for Skeleton-Based Action Recognition([AAAI18](https://arxiv.org/pdf/1801.07455.pdf))
    * [X] Two-Stream Adaptive Graph Convolutional Networks for Skeleton-Based Action Recognition ([CVPR19](https://zpascal.net/cvpr2019/Shi_Two-Stream_Adaptive_Graph_Convolutional_Networks_for_Skeleton-Based_Action_Recognition_CVPR_2019_paper.pdf))

## 2019-10
Work hard for PRCV2019 Challenge(body track) workshop (**Rank 8th**).

## 2019-9
Begin my internship in vision and learning lab @ Shanghai Jiao Tong University.
