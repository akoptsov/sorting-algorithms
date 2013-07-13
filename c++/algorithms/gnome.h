#ifndef _GNOME_H_
#define _GNOME_H_

#include "commons/commons.h"

class GnomeSort: public ISort {
	
	public:

		GnomeSort() : ISort("gnome") {}

		virtual void sort(int* array, int length);
};

#endif