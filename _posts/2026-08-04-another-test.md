---
layout: default
title: another test
description: testing out datetime and other misc things
date: 2026-08-04 15:46:44
math: true
tags: [math, testing]
---
hey guys, here's a bit of math because i want to test scrollable latex

$$J^{\text{GRPO}}(\theta) = \mathbb{E}_{q \sim D, {\{o_i\}}^{G}_{i=1}\sim \pi_{\text{old}}(\cdot|q)}\left[\frac{1}{G}\sum_{i=1}^G \frac{1}{|o_i|}\sum_{t=1}^{|o_i|}\min\left(\frac{\pi_\theta(o_{i, t}|q_,o_{i, < t})}{\pi_\text{old}(o_{i, t}|q_,o_{i, < t})}\cdot\frac{R_i - \mu(R)}{\sigma(R)}, \text{clip}\left(\frac{\pi_\theta(o_{i, t}|q,o_{i, < t})}{\pi_\text{old}(o_{i, t}|q,o_{i, < t})}, 1-\epsilon_1, 1+\epsilon_2\right)\cdot\frac{R_i - \mu(R)}{\sigma(R)}\right)-\beta\mathbb{D}_\text{KL}(\pi_\theta(\cdot|q,o_{i, < t})||\pi_\text{ref}(\cdot|q,o_{i, < t}))\right]$$

here's some inline `code`

and a code block

```java
System.out.println("Java sucks I lowkey forgot it");

int arr = new int[20]; //something like this
for (int i: arr){
	System.out.println(i);
}
```


