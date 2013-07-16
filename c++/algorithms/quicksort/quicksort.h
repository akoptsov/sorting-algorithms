#ifndef _QUICKSORT_H_
#define _QUICKSORT_H_

#include "../commons/commons.h"

class QuickSort: public ISort {

	public:

		QuickSort() : ISort("quicksort") { }

		virtual void sort(int *array, int length);

	private:

		virtual void sort(int *array, int start, int end);

};

#endif /* _QUICKSORT_H_ */


