#include "commons.h"

void swap(int *array, int i1, int i2) {
	
	if (i1 == i2) {
		return;
	}

	int tmp = array[i1];
	array[i1] = array[i2];
	array[i2] = tmp;
}

void move(int *array, int iOld, int iNew) {

	if (iOld == iNew) {
		return;
	}

	int value = array[iOld],
		itemSize = sizeof(int),
		i, j;

	if (iOld > iNew) {

		for (i = iOld, j = i - 1; i > iNew; i = j, j--) {
			array[i] = array[j];
		}


	} else {

		for (i = iOld, j = i + 1; i < iNew; i = j, j++) {
			array[i] = array[j];
		}

	}

	array[iNew] = value;
}

