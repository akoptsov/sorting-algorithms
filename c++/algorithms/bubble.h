#ifndef _BUBBLE_H_
#define _BUBBLE_H_

class BubbleSort: public ISort {

	public: 
		BubbleSort() : ISort("bubble") { }

		virtual void sort(int *array, int length);
};

#endif /* _BUBBLE_H_ */