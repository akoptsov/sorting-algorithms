#ifndef _INSERTION_H_
#define _INSERTION_H_

#include "../commons/commons.h"

class InsertionSort: public ISort {

	public:
		InsertionSort() : ISort("insertion") { }

		virtual void sort(int* array, int length);
};

#endif /* _INSERTION_H_*/