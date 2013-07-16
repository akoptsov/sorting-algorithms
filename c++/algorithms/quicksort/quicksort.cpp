#include "quicksort.h"

void QuickSort::sort(int *array, int length) {
	this->sort(array, 0, length - 1);
}

void QuickSort::sort(int *array, int start, int end) {

	if (start >= end) {
		return;
	}


	int i, 
		dividerLocation = (start + end) >> 1, 
		dividerValue = array[dividerLocation],
		newDividerLocation = start;

	swap(array, dividerLocation, end);

	for (i = start; i < end; i++) {
		if (array[i] < dividerValue) {
			swap(array, i, newDividerLocation);
			newDividerLocation++;
		}
	}

	swap(array, end, newDividerLocation);

	this->sort(array, start, newDividerLocation);
	this->sort(array, newDividerLocation + 1, end);
}