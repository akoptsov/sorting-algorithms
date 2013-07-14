#include "selection.h"

int getMinIndex(int *array, int start, int length) {
	int position = start,
		minimal = array[start],
		current = minimal,
		i;

	for (i = start + 1; i < length; i++) {
		
		current = array[i];
		
		if (current < minimal) {
			position = i;
			minimal = current;
		}
	}

	return position;
}

void SelectionSort::sort(int *array, int length) {

	int i, minIndex;

	for (i = 0; i < length; i++) {

		minIndex = getMinIndex(array, i, length);
		move(array, minIndex, i);

	}
}