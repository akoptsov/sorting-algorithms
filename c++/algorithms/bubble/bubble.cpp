#include "bubble.h"

void BubbleSort::sort(int *array, int length) {

	int  i, current, next;
	bool sorted;

	for (i = length - 1; i >= 0; i--) {
		
		sorted = true;
		
		for (current = 0, next = 1; current < i; current = next, next++) {
			if (array[current] > array[next]) {
				swap(array, current, next);
				sorted = false;
			}
		}

		if (sorted) {
			break;
		}

	}

}
