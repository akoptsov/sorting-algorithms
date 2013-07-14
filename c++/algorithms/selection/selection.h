#ifndef _SELECTION_H_
#define _SELECTION_H_

#include "../commons/commons.h"

class SelectionSort: public ISort {

	public:
		SelectionSort() : ISort("selection") { };

		virtual void sort(int* array, const int length);
};


#endif /* _SELECTION_H_ */