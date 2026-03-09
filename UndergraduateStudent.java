package com.cs.junghu;

class UndergraduateStudent extends Student{
	int yearOfStudy;
	UndergraduateStudent(String a, int b, String c, int d) {
		super(a, b, c);
		yearOfStudy = d;
	}
	public void displayDetails() {
		super.displayDetails();
		System.out.println("Year of Study: " + this.yearOfStudy);
	}
	
}
