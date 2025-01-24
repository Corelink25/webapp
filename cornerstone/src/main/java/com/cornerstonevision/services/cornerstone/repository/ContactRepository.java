package com.cornerstonevision.services.cornerstone.repository;

import com.cornerstonevision.services.cornerstone.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
