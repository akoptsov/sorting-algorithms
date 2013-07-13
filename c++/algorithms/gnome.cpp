#include "commons/commons.h"
#include "gnome.h"

void GnomeSort::sort(int *array, int length) {

	int last = 0,
		current = 0,
		next = 1;

	while (next < length) {
		
		if (array[current] > array[next]) {
			
			if (last == 0) {
				last = next;
			}

			swap(array, next, current);

			if (current > 0) {
				next = current;
				current--;
			}

		} else {
			
			if (last != 0) {
				next = last;
				last = 0;
			}
			
			current = next;
			next++;
		}
	}
}