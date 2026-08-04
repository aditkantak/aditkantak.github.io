---
layout: default
title: Testing out math mode
description: Trying out math mode for my blog!!!!
date: 2026-08-04 14:15:00
math: true
---
GRPO Objective:

$$
\mathcal{J}_\text{GRPO} = 
\mathbb{E}_{x\sim\mathcal{D}, \{y_i\}_{i=1}^G\sim\pi_\text{old}(\cdot|x)}
\left[
\frac
{1}
{\sum_{i=1}^G|y_i|}
\sum_{i=1}^G
\sum_{j=1}^{|y_i|}
A_{i,j}
\right]
$$

inline $\text{math}$ mode $y = \theta \gamma_\beta$ 

cool not sure why line breaks are broken
heyo hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello 


two spaces

```python
for i in range(20):
	print(i)
```

that's a python script, here's c++

```c++
int* arr = new int[20];
for (int i = 0; i < 20; ++i){
	std::cout << i << std::endl;
}
delete[] arr
```

let's see if syntax highlighting is any different?