#include "commons.h"

void swap(int *array, int i1, int i2) {
	int tmp = array[i1];
	array[i1] = array[i2];
	array[i2] = tmp;
}
