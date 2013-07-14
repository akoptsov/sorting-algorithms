#include "insertion.h"


void InsertionSort::sort(int *array, int length) {

	int i, position;

	for (i = 1; i < length; i++) {
		position = i;
		
		while (position > 0 && array[position - 1] > array[i]) {
			position--;
		}

		move(array, i, position);
	}
}